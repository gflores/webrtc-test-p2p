
(async () => {
  var SimplePeer = require('simple-peer')

  let p;

  if (location.hash === '#1') {
    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

    p = new SimplePeer({ initiator: true, trickle: true, stream: stream});
    
  } else {
    p = new SimplePeer({initiator: false, trickle: true});

    p.on('stream', stream => {
      // got remote video stream, now let's show it in a video tag
      var video = document.querySelector('video')
   
      if ('srcObject' in video) {
        video.srcObject = stream
      } else {
        video.src = window.URL.createObjectURL(stream) // for older browsers
      }
   
      video.play();
    });
  }

  p.on('error', err => console.log('error', err))

  //when the signal is ready
  p.on('signal', data => {
    document.querySelector('#my-signal').innerHTML += JSON.stringify(data) + "<br><br><br>";
  })

  //input the signal of the other party
  document.querySelector('form').addEventListener('submit', ev => {
    ev.preventDefault()
    p.signal(JSON.parse(document.querySelector('#other-signal').value))
    document.querySelector('#other-signal').value = "";
  })
  
  //when both parties have connected
  p.on('connect', () => {
    document.querySelector('#my-signal').style = "background: red;";
  })
})();
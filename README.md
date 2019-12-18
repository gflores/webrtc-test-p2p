# webrtc-test-p2p

`npm install`

`npm start`

1) Open http://localhost:9966/#1 on Chrome. That tab is the **Initiator**. (It'll ask for camera and sound permission)


2) Open http://localhost:9966 on another tab on Chrome. That tab is the **Receiver**


3) You will see many JSON codes on the **Initiator** (http://localhost:9966/#1) on Chrome.
Copy the first JSON code to the text input of the **Receiver** (http://localhost:9966).
Press Submit. A few JSON codes should appear on the **Receiver**


4) Copy the JSON code on the Receiver to the **Initiator**. And Submit.
Keep copying and submitting from the **Receiver** to the **Initiator** until the **Initiator** turns red, and a video feed appear on the **Receiver**


However when we open the Receiver on Firefox, there is an error on the console (ICE failed, add a TURN server and see about:webrtc)

Please help me install the Turn Server to make WebRTC work on any network and any platform

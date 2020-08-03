## pages

```
home: /
conference: /conference/:conference_id/:user_id
qa: /qa/:conference_id/:user_id
```

## websockets

```
import io from "socket.io-client";
const socket = io(); // Import this as a global instance eg. see client utils folder

// event emitters
socket.emit(`/api/conference/message`, data); // data: { chat_id: "number" }
socket.emit(`/api/conference/invite`, data); // data: { chat_id: "number", user_id: "number" }
socket.emit(`/api/conference/question`, data); // data: { chat_id: "number" }
socket.emit(`/api/conference/answer`, data); // data: { chat_id: "number", user_id: "number" }

// event listeners
socket.on(`/api/conference/message/${"chat_id"}`, receiveMessageCallback);
socket.on(`/api/conference/invite/${"chat_id"}/${"user_id"}`, receivePrivateInviteCallback);
socket.on(`/api/conference/question/${"chat_id"}`, receiveQuestionCallback);
socket.on(`/api/conference/answer/${"chat_id"}/${user_id}`, receiveAnswerCallback);
```

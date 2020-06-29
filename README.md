# cod-chat

## front-end code examples

```
import io from "socket.io-client";
const socket = io(); // Import this as a global instance eg. see client utils folder

// event emitters
socket.emit(`/api/conference/message`, data); // data: { chat_id: "string", user_id: "string", message: "string" }
socket.emit(`/api/conference/invite`, data); // data: { chat_id: "string", user_id: "string", new_chat_id: "string" }
socket.emit(`/api/conference/question`, data); // data: { chat_id: "string", user_id: "string", message: "string" }

// event listeners
socket.on(`/api/conference/message/${"chat_id"}`, receiveMessageCallback);
socket.on(`/api/conference/invite/${"chat_id"}/${"user_id"}`, receivePrivateInviteCallback);
socket.on(`/api/conference/question/${"chat_id"}`, receiveQuestionCallback);
```

## listener callback data

Listener callback data will be returned in the form: { error: null, data: {} }

## error handling

I've built type/parameter checking into the backend that will dynamically throw errors when
required. For security reasons I don't pass server errors back to the client and so for more detailed
error messages you'll have to run the server locally.

## environment variables

Make a folder on the project root called env (mkdir env) and inside a file called dev.env (vim dev.env) below is
what it should contain:

```
PORT=5000

REDIS=false
REDIS_HOST=
REDIS_PORT=
```

Then run the following command to set it on project root:

```
npm run dev.env
```

## development install/run

```
git clone https://github.com/jackson-elfers/cod-chat.git
cd cod-chat
npm install && cd client && npm install && cd ..
npm run dev
```

## deployment to heroku

```
heroku login
heroku create codechat
git add .
git commit -m "init: commit"
git push heroku master
```

## about redis and scaling

For development purposes one instance will suffice but scaling sockets requires a dedicated database that
keeps track of our sockets accross multiple servers behind a load balancer. You'll have to sign up for a
redis database and fill in the host and port and set redis to "true".

## questions/concerns

If something is confusing please call me. I want this to be intuitive as possible. Thanks so much!

## remote development server

https://codchat.herokuapp.com - you can use this while developing if you'd like, then once we're
ready I'll have you create your own account so you can manage it yourself!

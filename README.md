# cod-chat

## front-end code examples

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

## listener callback data

Listener callback data will be returned in the form: { error: null, data: {} }

## development install/run

### clone and install

```
git clone https://github.com/jackson-elfers/cod-chat.git
cd cod-chat
npm install && cd client && npm install && cd ..
```

### create a file called .env on the project's root

```
PORT=5000

REDIS=false
REDIS_HOST=
REDIS_PORT=
```

### run development server

```
npm run dev
```

## deployment to heroku

You'll have to create a heroku account and download the cli tool and then type the following.

```
heroku login
heroku create cod-chat
git add .
git commit -m "init: commit"
git push heroku master
```

## cross domain sockets

```
import io from "socket.io-client";
const socket = io("https://codchat.herokuapp.com"); // You can use this url for development :)
```

## vertical scaling with heroku

[https://devcenter.heroku.com/articles/dyno-types](https://devcenter.heroku.com/articles/dyno-types)

## about redis and horizontal scaling

For development purposes one instance will suffice but scaling sockets requires a dedicated database that
keeps track of our sockets accross multiple servers behind a load balancer. You'll have to sign up for a
redis database and fill in the host and port and set redis to "true".

## horizontal scaling with heroku and redis

### 1) create an account with redislabs and retrieve host and port

[https://redislabs.com/](https://redislabs.com/)

### 2) update your environment variables on heroku with the following

```
PORT=5000

REDIS=true
REDIS_HOST=redislabhost
REDIS_PORT=redislabport
```

### 3) scale the heroku instance on the browser interface

[https://devcenter.heroku.com/articles/scaling](https://devcenter.heroku.com/articles/scaling)

## questions/concerns

If something is confusing please call me. I want this to be intuitive as possible. Thanks so much!

## remote development server

https://codchat.herokuapp.com - you can use this while developing if you'd like, then once we're
ready I'll have you create your own account so you can manage it yourself!

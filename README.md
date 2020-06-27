## pages

```
home: /
conference: /conference/:conference_id/:user_id
qa: /qa/:conference_id/:user_id
```

## websockets

```
# read

message: /conference/message/:conference_id { user_id: "string", message: "string"  }
invite: /conference/invite/:conference_id/:user_id { conference_id: "string"  }
question: /conference/question/:conference_id/:user_id
```

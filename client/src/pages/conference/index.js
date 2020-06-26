import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../config";
import io from "socket.io-client";
const socket = io();

function Messages(props) {
  var temp = [];
  for (var i = props.data.length - 1; i >= 0; --i) {
    temp.push(
      <div key={props.data[i].message} className="box">
        <p>{props.data[i].user_id}</p>
        <p>{props.data[i].message}</p>
        <button
          onClick={function() {
            props.handlers[0](props.data[i].user_id);
          }}
        >
          Private Invite
        </button>
      </div>
    );
  }
  return temp;
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  sendPrivateInvite(user_id) {
    try {
      socket.emit(`${routes.Conference}/invite`, {
        conference_id: this.props.match.params.conference_id,
        user_id: user_id,
        private_chat_id: this.props.match.params.user_id
      });
    } catch (e) {
      this.props.actions.notice.message(e.message);
    }
  }

  sendMessage(e) {
    e.preventDefault();
    const form = document.getElementById("formOne");
    const data = {
      conference_id: this.props.match.params.conference_id,
      user_id: this.props.match.params.user_id,
      message: form.body.value
    };
    try {
      socket.emit(`${routes.Conference}/message`, data);
      form.body.value = "";
    } catch (e) {
      this.props.actions.notice.message(e.message);
    }
  }

  receiveMessage(data) {
    try {
      if (data.error) {
        throw new Error(data.error);
      }
      var updateMessages = JSON.parse(JSON.stringify(this.state.messages));
      updateMessages.push(data.data);
      this.setState({ messages: updateMessages });
    } catch (e) {
      this.props.actions.notice.message(e.message);
    }
  }

  websockets() {
    socket.on(`${routes.Conference}/message/${this.props.match.params.conference_id}`, this.receiveMessage.bind(this));
  }

  componentDidMount() {
    this.websockets();
  }

  render() {
    return (
      <div>
        <h1>Conference</h1>
        <hr />
        <Link
          target="_blank"
          to={`${routes.QA}/${this.props.match.params.conference_id}/${this.props.match.params.user_id}`}
        >
          <button>Speaker Questions</button>
        </Link>

        <Link
          target="_blank"
          to={`${routes.Conference}/${this.props.match.params.user_id}/${this.props.match.params.user_id}`}
        >
          <button>Private Chat</button>
        </Link>

        <form id="formTwo" onSubmit={this.sendMessage.bind(this)}>
          <textarea name="body" placeholder="Ask a Question" />
          <input type="submit" value="Question" />
        </form>

        <form id="formOne" onSubmit={this.sendMessage.bind(this)}>
          <textarea name="body" placeholder="Post a Comment" />
          <input type="submit" value="Comment" />
        </form>
        <Messages data={this.state.messages} />
      </div>
    );
  }
}
export default Main;

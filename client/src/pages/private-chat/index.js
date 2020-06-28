import React from "react";
import { Link } from "react-router-dom";
import { routes, api } from "../../config";
import { connect } from "../../redux";
import { socket } from "../../utils";

function Messages(props) {
  var temp = [];
  for (var i = props.data.length - 1; i >= 0; --i) {
    temp.push(
      <div key={props.data[i].message} className="box">
        <p>{props.data[i].user_id}</p>
        <p>{props.data[i].message}</p>
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

  sendMessage(e) {
    e.preventDefault();
    const form = document.getElementById("formOne");
    const data = {
      chat_id: this.props.match.params.chat_id,
      user_id: this.props.match.params.user_id,
      message: form.body.value
    };
    try {
      socket.emit(api.conference.message, data);
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
    socket.on(`${api.conference.message}/${this.props.match.params.chat_id}`, this.receiveMessage.bind(this));
  }

  componentDidMount() {
    this.websockets();
  }

  render() {
    return (
      <div>
        <h1>Private Chat</h1>
        <hr />

        <form id="formOne" onSubmit={this.sendMessage.bind(this)}>
          <textarea name="body" placeholder="Post a Comment" />
          <input type="submit" value="Comment" />
        </form>
        <Messages data={this.state.messages} />
      </div>
    );
  }
}
export default connect(Main);

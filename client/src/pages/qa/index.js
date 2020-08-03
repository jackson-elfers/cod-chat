import React from "react";
import { Link } from "react-router-dom";
import { routes, api } from "../../config";
import { connect } from "../../redux";
import { socket } from "../../utils";

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  sendAnswer(e) {
    e.preventDefault();
    const form = document.getElementById(`${this.props.data.user_id}-${this.props.data.message_id}`);
    const data = {
      chat_id: this.props.data.chat_id,
      user_id: this.props.data.user_id,
      message: form.body.value
    };
    try {
      socket.emit(api.conference.answer, data);
      form.body.value = "";
    } catch (e) {
      this.props.actions.notice.message(e.message);
    }
  }

  render() {
    return (
      <div className="box">
        <p>{this.props.data.user_id}</p>
        <p>{this.props.data.message}</p>
        <form id={`${this.props.data.user_id}-${this.props.data.message_id}`} onSubmit={this.sendAnswer.bind(this)}>
          <textarea name="body" placeholder="Answer" />
          <input type="submit" value="Answer" />
        </form>
      </div>
    );
  }
}

function Messages(props) {
  var temp = [];
  for (var i = props.data.length - 1; i >= 0; --i) {
    temp.push(
      <div key={props.data[i].message}>
        <Message data={props.data[i]} />
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
    socket.on(`${api.conference.question}/${this.props.match.params.chat_id}`, this.receiveMessage.bind(this));
  }

  componentDidMount() {
    this.websockets();
  }

  render() {
    return (
      <div>
        <h1>QA</h1>
        <hr />
        <Messages data={this.state.messages} />
      </div>
    );
  }
}
export default connect(Main);

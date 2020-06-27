import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../config";
import { connect } from "../../redux";
import io from "socket.io-client";
const socket = io();

function Messages(props) {
  var temp = [];
  for (var i = props.data.length - 1; i >= 0; --i) {
    temp.push(
      <div key={props.data[i].message} className="box">
        <p>{props.data[i].user_id}</p>
        <p>{props.data[i].message}</p>
        <button data-index={i} onClick={props.handlers[0]}>
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
    socket.on(`${routes.Conference}/question/${this.props.match.params.conference_id}`, this.receiveMessage.bind(this));
  }

  componentDidMount() {
    this.websockets();
  }

  render() {
    return (
      <div>
        <h1>QA</h1>
        <hr />
        <Messages data={this.state.messages} handlers={[this.sendPrivateInvite.bind(this)]} />
      </div>
    );
  }
}
export default connect(Main);

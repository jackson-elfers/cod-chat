import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../config";

class Main extends React.Component {
  async conference(e) {
    e.preventDefault();
    const form = document.getElementById("formOne");
    const data = { user_id: form.user_id.value, chat_id: form.chat_id.value };
    try {
      this.props.history.push(`${routes.Conference}/${data.chat_id}/${data.user_id}`);
    } catch (e) {
      this.props.actions.notice.message(e.message);
    }
  }

  render() {
    return (
      <div>
        <h1>New Conference</h1>
        <hr />
        <form id="formOne" onSubmit={this.conference.bind(this)}>
          <input type="text" name="chat_id" placeholder="Conference Name" />
          <input type="text" name="user_id" placeholder="Attendee Name" />
          <input type="submit" value="Create Conference" />
        </form>
      </div>
    );
  }
}
export default Main;

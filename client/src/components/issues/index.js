import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import check from "check-types";
import { api, routes } from "../../config";
import { connect } from "../../redux";

function Issues(props) {
  var temp = [];
  for (var i = 0; i < props.data.length; ++i) {
    temp.push(
      <div className="box" key={`${props.data[i]._id}${props.data[i].url_title}`}>
        <Link to={`${routes.ReadIssue}/${props.data[i].url_title}`}>
          <p>{`${props.data[i].body.slice(0, 400)}...`}</p>
        </Link>
      </div>
    );
  }
  return temp;
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      offset: props.offset,
      data: [],
      loading: true
    };
  }

  async readIssues() {
    const response = await axios.get(
      `${process.env.REACT_APP_API}${this.props.url}/${this.state.index}/${this.state.offset}`
    );
    if (response.data.error) {
      throw new Error(response.data.error.detail);
    }
    var update = JSON.parse(JSON.stringify(this.state.data));
    for (var i = 0; i < response.data.data.length; ++i) {
      update.push(response.data.data[i]);
    }
    this.setState({ data: update, index: ++this.state.index });
  }

  async componentDidMount() {
    try {
      await this.readIssues();
      this.setState({ loading: false });
    } catch (e) {
      this.props.actions.notice.message(e.message);
    }
  }

  render() {
    if (this.state.loading) {
      return <div style={{ display: "none" }}></div>;
    }
    return (
      <div>
        <Issues data={this.state.data} />
        <button onClick={this.readIssues.bind(this)}>load more</button>
      </div>
    );
  }
}

export default connect(Main);

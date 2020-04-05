import React, { Component } from "react";

import { MyCoolButton } from "../MyCoolButton";

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      publisher: "",
      comment: "",
    };
  }
  bichih = (e) => {
    this.setState({ comment: e.target.value });
  };
  render() {
    return (
      <div>
        <div className="CoolText">{this.state.comment}</div>
        <div>Зохиолч: {this.props.zohiogch}</div>
        <textarea onChange={this.bichih}></textarea>
        <MyCoolButton
          comment={this.state.comment}
          tovchNer="in the comment comp:Коментоо үнэнээр нь бич"
          text="Хадгал"
        />
      </div>
    );
  }
}
export default Comment;

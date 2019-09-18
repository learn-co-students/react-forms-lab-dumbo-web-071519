import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }
  updateState = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, e => console.log(this.state))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={ event => this.updateState(event)}/>
        <span className="remain">Characters Remaining:{this.props.maxChars - this.state.message.length} </span>
      </div>
    );
  }
}

export default TwitterMessage;

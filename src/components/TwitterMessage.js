import React from "react";

class TwitterMessage extends React.Component {
  
  state = {
    message: "",
    charsRemaining: 140
  }

  messageChange = event => {
    console.log(event.target.value)
    this.setState({
      message: event.target.value,
      charsRemaining: 140 - parseInt(event.target.value.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.messageChange(event)}/>
        <p>Chars Remaining: {this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;

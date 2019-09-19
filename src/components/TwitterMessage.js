import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  onChange = (event) => {
    this.setState({
      input: event.target.value
    })
    console.log("inside")
  }

  charactersLeft = () => {
    return (this.props.maxChars - this.state.input.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.onChange} type="text" name="message" id="message" value={this.state.input} />
        <strong>{this.charactersLeft()} characters left</strong>
      </div>
    );
  }
}

export default TwitterMessage;

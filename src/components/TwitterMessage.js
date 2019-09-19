import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    
    };
   
}
  
 onChange=(event)=>{
  
  //  event.preventDefault()

   this.setState({
     message: event.target.value

   })
   console.log(this.state.message)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.onChange} 
        value={this.state.message} 
        type="text"
         name="message"
          id="message" 
          disabled = {this.state.message.length >= this.props.maxChars}/>
        <p>Remaining characters counter: {this.props.maxChars - this.state.message.length  }</p>
      </div>

    );
  }
}

export default TwitterMessage;

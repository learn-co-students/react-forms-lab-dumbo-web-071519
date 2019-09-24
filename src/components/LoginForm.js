import React from "react";

class LoginForm extends React.Component {
 state = {
   username: "",
   password: ""
 }

 onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
 }

 onSubmit = (event) => {
   event.preventDefault()
   if(this.state.username.length > 0 && this.state.password.length > 0){
     this.props.handleLogin()
   }
 }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.onChange(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.onChange(event)}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

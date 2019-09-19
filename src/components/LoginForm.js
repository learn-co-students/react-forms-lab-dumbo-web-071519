import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  onSubmit=(event) => {
  event.preventDefault()
    if (this.state.username.length !== 0 && this.state.password.length !== 0){
      this.props.handleLogin(this.state)
    }
    
    

  }
  onChange=(event) => {
    // event.preventDefault()
   // console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  render() {
    return (
      <form onSubmit={this.onSubmit} >
        <div>
          <label>
            Username
            <input onChange={this.onChange} id="username"  name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.onChange} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit" disabled={this.state.username.length === 0 || this.state.password.length === 0 }>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

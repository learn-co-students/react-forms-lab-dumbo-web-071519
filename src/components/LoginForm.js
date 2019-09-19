import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleLoginFeilds = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = event => {
    
    event.preventDefault();
    !this.isValid() ? (this.props.handleLogin(this.state)) : 0
    
  };

  isValid=()=>{
    return (this.state.username.length === 0 || this.state.password.length === 0)
  }
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleLoginFeilds}
              // disabled={this.state.username.length === 0}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleLoginFeilds}
              // disabled={this.state.password.length < 1}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

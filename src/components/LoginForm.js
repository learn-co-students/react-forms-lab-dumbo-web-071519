import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  emptyOrNot = () => {
    return (this.state.username.length!==0 && this.state.password.length!==0)
  }

  empty = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.emptyOrNot() ? this.props.handleLogin : this.empty}>
        <div>
          <label>
            Username
            <input onChange={this.onChange} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.onChange} id="password" name="password" type="password" value={this.state.password}/>
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

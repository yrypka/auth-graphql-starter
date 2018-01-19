import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  onSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;

    if (typeof this.props.onSubmit === 'function') {
      this.props.onSubmit({ email, password });

      this.setState({ email: '', password: '' });
    }
  }

  renderErrors() {
    return (
      <div className="errors">
        {this.props.errors.map((error, i) => <div key={i}>{error}</div>)}
      </div>
    );
  }

  render() {
    return (
      <div className="row">
        <form className="col s6" onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input
              type="email"
              placeholder="Email"
              autoComplete="username"
              onChange={e => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              onChange={e => this.setState({ password: e.target.value })}
              value={this.state.password}
            />
          </div>
          {this.renderErrors()}
          <input type="submit" className="btn" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AuthForm;

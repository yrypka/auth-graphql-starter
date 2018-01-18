import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import { graphql } from 'react-apollo';

import currentUserQuery from '../queries/currentUserQuery';
import logoutMutation from '../mutations/logoutMutation';

class Header extends Component {
  onLogoutClick(event) {
    event.preventDefault();

    this.props.mutate({
      refetchQueries: [{ query: currentUserQuery }]
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) { return <div></div>; }

    if (user) {
      return (
        <li>
          <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
        </li>
      );
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(logoutMutation)(
  graphql(currentUserQuery)(Header)
);

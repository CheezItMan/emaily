import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        console.log('this.props.auth is false');
        return (
          <li><a href="/auth/google">Log in</a></li>
        );
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="2"><a href="/api/logout">Log Out</a></li>,
          <li key="3" style={{ margin: '0 10px' }}>Credits {this.props.auth.credits}</li>,
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="brand-logo"
          >
            Emaily
          </Link>
          <ul id="nav-mobile" className="right">

            <li><a href="/surveys">Dashboard</a></li>
            {this.renderContent()}
            <li><a href="surveys/new">New Survey</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);

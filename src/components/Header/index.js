import React from 'react'
import PropTypes from 'prop-types'


class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      toggleProfile: false
    }

    this.handleClickToggle = this.handleClickToggle.bind(this)
  }

  handleClickToggle() {
    if (this.state.toggleProfile) {
      document.removeEventListener('click', this.toggleProfile);
    } else {
      document.addEventListener('click', this.toggleProfile);
    }

    this.setState({
      ...this.state,
      toggleProfile: !this.state.toggleProfile
    });
  }


  render() {
    return (
      <div id="header">
        {/* navbar navbar-default */}
        <div className="navbar navbar-default" role="navigation">
          {/* navbar-header */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a href="/" className="navbar-brand">Keymeans</a>
          </div>
          {/* /navbar-header */}
          <form className="navbar-form navbar-left" role="search">
            <div className>
              <div className="input-group">
                <span className="input-group-btn">
                  <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: 24, width: 24, display: 'block', fill: 'rgb(118, 118, 118)' }}>
                    <path d="m10.4 18.2c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6m12.6 3.8-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7v.1l5 5c .3.3.8.3 1.1 0s .4-.8.1-1.1" fillRule="evenodd" />
                  </svg>
                </span>
                <input type="text" className="form-control" placeholder="Search for..." />
              </div>
            </div>
          </form>
          {/* navbar */}
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <a href="">Link</a>
              </li>
              <li>
                <a href="">Link</a>
              </li>
              <li>
                <a href="">Link</a>
              </li>
              <li>
                <a href="">Link</a>
              </li>
              <li>
                <a href="">Link</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="">
                  <span className="glyphicon glyphicon-user" /> Sign Up</a>
              </li>
              <li>
                <a href="">
                  <span className="glyphicon glyphicon-log-in" /> Login</a>
              </li>
              <li className={`dropdown ${this.state.toggleProfile && 'open' }`}>
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  onClick={this.handleClickToggle}
                >
                  Avatar
                  <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="">Thông tin cá nhân</a>
                  </li>
                  <li>
                    <a href="/admin">Chuyển tới trang admin</a>
                  </li>
                  <li>
                    <a href="">Đăng xuất</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* /navbar */}
        </div>
        {/* /navbar navbar-default */}
      </div>
    )
  }
}

Header.contextTypes = {
  router: PropTypes.object.isRequired
}


export default Header;

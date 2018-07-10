import React from 'react'
import PropTypes from 'prop-types'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'


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
       <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Logo</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem fluid eventKey={1} href="#">
              Home
            </NavItem>
            <NavItem eventKey={2} href="#">
              Classes
            </NavItem>
            <NavItem eventKey={2} href="#">
              Students
            </NavItem>
            <NavDropdown eventKey={3} title="Courses" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Course 1</MenuItem>
              <MenuItem eventKey={3.2}>Course 2</MenuItem>
              <MenuItem eventKey={3.3}>Course 3</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
            <NavItem eventKey={4} href="#">
              Exercises
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Register
            </NavItem>
            <NavItem eventKey={2} href="#">
              Login
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>;
      </div>
    )
  }
}

Header.contextTypes = {
  router: PropTypes.object.isRequired
}


export default Header;

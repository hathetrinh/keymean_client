import React from 'react'
import PropTypes from 'prop-types'


class Footer extends React.Component {

  render() {
    return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">© Keymeans, 2018.</span>
      </div>
    </footer>
    )
  }
}

Footer.contextTypes = {
  router: PropTypes.object.isRequired
}


export default Footer;

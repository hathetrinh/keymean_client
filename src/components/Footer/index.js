import React from 'react'
import PropTypes from 'prop-types'


class Footer extends React.Component {

  render() {
    return (
      <div id="footer">
        <div className="container">
          <div className="row footer-content">
            {/* footer-section */}
            <div className="col-md-3">
              <div className="footer-content-title">
                <h4>Keymeans</h4>
              </div>
              <div className="footer-content-links">
                <ul>
                  <li>
                    <a href="">Trang chủ</a>
                  </li>
                  <li>
                    <a href="">Giới thiệu</a>
                  </li>
                  <li>
                    <a href="">Vinh danh học viên</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /footer-section */}
            {/* footer-section */}
            <div className="col-md-3">
              <div className="footer-content-title">
                <h4>Keymeans</h4>
              </div>
              <div className="footer-content-links">
                <ul>
                  <li>
                    <a href="">Liên kết 1</a>
                  </li>
                  <li>
                    <a href="">Liên kết 2</a>
                  </li>
                  <li>
                    <a href="">Liên kết 3</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /footer-section */}
            {/* footer-section */}
            <div className="col-md-3">
              <div className="footer-content-title">
                <h4>Keymeans</h4>
              </div>
              <div className="footer-content-links">
                <ul>
                  <li>
                    <a href="">Liên kết 1</a>
                  </li>
                  <li>
                    <a href="">Liên kết 2</a>
                  </li>
                  <li>
                    <a href="">Liên kết 3</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /footer-section */}
            {/* footer-section */}
            <div className="col-md-3">
              <div className="footer-content-title">
                <h4>Keymeans</h4>
              </div>
              <div className="footer-content-links">
                <ul>
                  <li>
                    <a href="">Liên kết 1</a>
                  </li>
                  <li>
                    <a href="">Liên kết 2</a>
                  </li>
                  <li>
                    <a href="">Liên kết 3</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /footer-section */}
          </div>
          <div className=" row copyright">
            <h4>
              © Keymeans, 2018.
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

Footer.contextTypes = {
  router: PropTypes.object.isRequired
}


export default Footer;

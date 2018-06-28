import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { getDataRequest } from './Actions'

class Class extends Component {

  componentDidMount() {
    this.props.getDataRequest()
  }

  render() {
    const { classes } = this.props

    return (
      <div className="col-md-9">
        <div className="listing-container">
          <div className="list-title">
            <h2>
              Danh sách lớp học
            </h2>
          </div>
          <div>
            <Link to='/admin/class/create'>
              Add class
            </Link>
          </div>
          <div className="list-container">
            {/* course-item */}
            {classes.map((item, index) => {
              return (
                <div key={index} className="list-item">
                  <div className="course-content">
                    <div className="course-title">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="course-description">
                      <h5>Cập nhật lần cuối lúc 15h30 10/6/2018</h5>
                    </div>
                    <div className="course-description">
                      <h5>Thời gian học</h5>
                      <p><span> bắt đầu: {item.startDate}</span> ~
                        <span> Kết thúc: {item.endDate}</span>
                      </p>
                    </div>
                  </div>
                  <div className="course-action">
                    <ul>
                      <li>
                        <a href="">Xem</a>
                      </li>
                      <li>
                        <a href="">Sửa</a>
                      </li>
                      <li>
                        <a href="">Xóa</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

Class.propTypes = {
  classes: PropTypes.array,
}

Class.defaultProps = {
  classes: [],
}

function mapStateToProps(state) {
  const { classE: { classes } } = state;
  return {
    classes
  };
}

export default connect(mapStateToProps, { getDataRequest })(Class);

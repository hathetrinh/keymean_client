import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getDataRequest } from './Actions'


class Courses extends Component {

  componentDidMount() {
    this.props.getDataRequest()
  }

  render() {
    const { courses } = this.props
    return (
      <div className="col-md-9">
        <div className="listing-container">
          <div className="list-title">
            <h2>
              Danh sách khóa học
            </h2>
          </div>
          <div>
            <Link to='/admin/courses/create'>
              Add course
            </Link>
          </div>
          <div className="list-container">
            {/* course-item */}
            {courses.map((item, index) => {
              return (
                <div className="list-item" key={index}>
                  <div className="course-content">
                    <div className="course-title">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="course-description">
                      <h5>{item.description}</h5>
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

Courses.propTypes = {
  courses: PropTypes.array,
}

Courses.defaultProps = {
  courses: [],
}

function mapStateToProps(state) {
  const { course: { courses } } = state;
  return {
    courses
  };
}

export default connect(mapStateToProps, { getDataRequest })(Courses);

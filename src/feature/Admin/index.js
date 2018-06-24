import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Courses from './Courses'
import Reservations from './Reservations'
import Class from './Class'
import Students from './Students'
import News from './News'
import Exercises from './Exercises'

class Admin extends Component {
  render() {
    const { match } = this.props

    return (
      <div id="main-content">
        <div className="container">
          <div className="col-md-3">
            <div className="listing-sidebar">
              <ul>
                <li>
                  <Link to={`${match.url}`}>
                    Danh sách khóa học
                  </Link>
                </li>
                <li>
                  <Link to={`${match.url}/reservations`}>
                    Danh sách đăng kí
                  </Link>
                </li>
                <li>
                  <Link to={`${match.url}/class`}>
                    Danh sách lớp học
                  </Link>
                </li>
                <li>
                  <Link to={`${match.url}/students`}>
                    Danh sách học viên
                  </Link>
                </li>
                <li>
                  <Link to={`${match.url}/news`}>
                    Danh sách tin tức
                  </Link>
                </li>
                <li>
                  <Link to={`${match.url}/exercises`}>
                    Danh sách bài tập
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Route exact path={`${match.path}`} component={Courses} />
          <Route path={`${match.path}/reservations`} component={Reservations} />
          <Route path={`${match.path}/class`} component={Class} />
          <Route path={`${match.path}/students`} component={Students} />
          <Route path={`${match.path}/news`} component={News} />
          <Route path={`${match.path}/exercises`} component={Exercises} />
        </div>
      </div>
    );
  }
}
    Admin.propTypes = {

    }

    export default connect()(Admin);

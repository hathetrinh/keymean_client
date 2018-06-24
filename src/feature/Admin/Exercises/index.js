import React, { Component } from 'react';
import { connect } from 'react-redux'


class Exercises extends Component {
  render() {

    return (
      <div className="col-md-9">
        <div className="listing-container">
          <div className="list-title">
            <h2>
              Danh sách bài tập
            </h2>
          </div>
          <div className="list-container">
            {/* course-item */}
            <div className="list-item">
              <div className="course-content">
                <div className="course-title">
                  <h3>Toeic 500 chuẩn hóa phát âm</h3>
                </div>
                <div className="course-description">
                  <h5>Cập nhật lần cuối lúc 15h30 10/6/2018</h5>
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
            {/* /course-item */}
            {/* course-item */}
            <div className="list-item">
              <div className="course-content">
                <div className="course-title">
                  <h3>Ngữ pháp cơ bản</h3>
                </div>
                <div className="course-description">
                  <h5>Cập nhật lần cuối lúc 15h30 10/6/2018</h5>
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
            {/* /course-item */}
            {/* course-item */}
            <div className="list-item">
              <div className="course-content">
                <div className="course-title">
                  <h3>Listen and repeat</h3>
                </div>
                <div className="course-description">
                  <h5>Cập nhật lần cuối lúc 15h30 10/6/2018</h5>
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
            {/* /course-item */}
          </div>
        </div>
      </div>
    );
  }
}
Exercises.propTypes = {

}

export default connect()(Exercises);

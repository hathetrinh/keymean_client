import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form'
import _ from 'lodash'

import { createRequest } from './Actions'
// import ValidateArea from '../../../components/ValidateArea'
import { ScrollTop } from '../../../components/utils/Utilities'

class Create extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(values) {
    this.props.createRequest(values)
  }

  componentWillReceiveProps(nextProps) {
    const submitFailed = _.get(nextProps.formClass, 'submitFailed', false)
    if (submitFailed) {
      ScrollTop()
    }
  }

  render() {
    // const { handleSubmit, formStudent } = this.props
    // const syncErrors = _.get(formStudent, 'syncErrors', '')
    // const submitFailed = _.get(formStudent, 'submitFailed', false)
    return (
      <div id="main-content">
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="active">
              <a data-toggle="tab" href="#home">Chi tiết lớp học</a>
            </li>
            <li>
              <a data-toggle="tab" href="#student">Học viên</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="home" className="tab-pane fade in active">
              {/* Title and description */}
              <div className="course-detail-item">
                <h2>Tên lớp học và mô tả chi tiết</h2>
                <div className="item-content">
                  <div className="form-group">
                    <label htmlFor="usr">Tên khóa học</label>
                    <input type="text" className="form-control" id="usr" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="comment">Mô tả chi tiết</label>
                    <textarea className="form-control" rows={5} id="comment" defaultValue={""} />
                  </div>
                </div>
              </div>
              {/* /Title and description */}
              {/* Check in and start date */}
              <div className="course-detail-item">
                <h2>Lịch học</h2>
                <div className="item-content">
                  <div className="form-group">
                    <label htmlFor="usr">Buổi 1</label>
                    <input type="time" className="form-control" id="usr" />
                    <select className="form-control">
                      <option>Thứ hai</option>
                      <option>Thứ ba</option>
                      <option>Thứ tư</option>
                      <option>Thứ năm</option>
                      <option>Thứ sáu</option>
                      <option>Thứ bảy</option>
                      <option>Chủ nhật</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="usr">Buổi 1</label>
                    <input type="time" className="form-control" id="usr" />
                    <select className="form-control">
                      <option>Thứ hai</option>
                      <option>Thứ ba</option>
                      <option>Thứ tư</option>
                      <option>Thứ năm</option>
                      <option>Thứ sáu</option>
                      <option>Thứ bảy</option>
                      <option>Chủ nhật</option>
                    </select>
                  </div>
                  <button className="btn">+ Thêm buổi học</button>
                </div>
              </div>
              {/* Check in and start date */}
              {/* set exercise for this class */}
              <div className="course-detail-item">
                <h2>Bài tập</h2>
                <div className="item-content">
                  <div className="form-group">
                    <label htmlFor="usr">Chọn bài tập</label>
                    <select className="form-control">
                      <option>Bài tập toiec số 1</option>
                      <option>Bài tập toiec số 2</option>
                      <option>Bài tập toiec số 3</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Check in and start date */}
              {/* submit */}
              <div className="course-detail-item">
                <button>Lưu thay đổi</button>
              </div>
              {/* /submit */}
            </div>
            {/* student tab */}
            <div id="student" className="tab-pane fade">
              <div className="list-container">
                <div>
                  <button>Thêm học viên</button>
                  <input type="text" />
                  <button>Tìm kiếm</button>
                </div>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Họ tên</th>
                      <th>Email</th>
                      <th>Số điện thoại</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nguyễn Văn A</td>
                      <td>manh@example.com</td>
                      <td>0123456789</td>
                      <td>
                        <button>Xóa</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Nguyễn Văn B</td>
                      <td>manh@example.com</td>
                      <td>0123456789</td>
                      <td>
                        <button>Xóa</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Nguyễn Văn C</td>
                      <td>manh@example.com</td>
                      <td>0123456789</td>
                      <td>
                        <button>Xóa</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Nguyễn Văn A</td>
                      <td>manh@example.com</td>
                      <td>0123456789</td>
                      <td>
                        <button>Xóa</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Nguyễn Văn B</td>
                      <td>manh@example.com</td>
                      <td>0123456789</td>
                      <td>
                        <button>Xóa</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Nguyễn Văn C</td>
                      <td>manh@example.com</td>
                      <td>0123456789</td>
                      <td>
                        <button>Xóa</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Nguyễn Văn A</td>
                      <td>manh@example.com</td>
                      <td>0123456789</td>
                      <td>
                        <button>Xóa</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Nguyễn Văn B</td>
                      <td>manh@example.com</td>
                      <td>0123456789</td>
                      <td>
                        <button>Xóa</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Nguyễn Văn C</td>
                      <td>manh@example.com</td>
                      <td>0123456789</td>
                      <td>
                        <button>Xóa</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* /student tab */}
          </div>
        </div>
      </div>

    );
  }
}

Create.propTypes = {
  handleSubmit: PropTypes.func,
  formClass: PropTypes.object,
}

function mapStateToProps(state) {
  const { form: { formClass } } = state;
  return {
    formClass,
  };
}

const formed = reduxForm({
  form: 'formClass'
})(Create)

export default connect(mapStateToProps, { createRequest })(formed);

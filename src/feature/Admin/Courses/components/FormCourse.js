import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import { required } from '../../../../components/utils/validate'
import DatePicker from '../../../../components/common/DatePicker'


class FormCourse extends Component {

  render() {
    return (
      <div className="course-detail-item">
        <h2>Thông tin bắt buộc</h2>
        <div className="item-content">
          <div className="form-group">
            <label htmlFor="usr">Họ tên</label>
            <Field
              component="input"
              className="form-control"
              name="firstName"
              placeholder="first name"
              validate={[required]}
            />
            <Field
              component="input"
              className="form-control"
              name="lastName"
              placeholder="last name"
              validate={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Giới tính</label>
            <select className="form-control">
              <option>Nam</option>
              <option>Nữ</option>
              <option>Khác</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="usr">Ngày sinh</label>
            <Field
              name="birthday"
              component={DatePicker}
              className="datepicker"
              validate={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="usr">Email</label>
            <Field
              component="input"
              className="form-control"
              type="email"
              name="email"
              placeholder="email"
              validate={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="usr">Số điện thoại</label>
            <input type="text" className="form-control" id="usr" />
          </div>
          <div className="form-group">
            <label htmlFor="usr">Địa chỉ</label>
            <Field
              component="input"
              className="form-control"
              name="address"
              placeholder="address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="usr">passsword</label>
            <Field
              component="input"
              className="form-control"
              type="password"
              name="password"
              placeholder="passsword"
              validate={[required]}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default FormCourse

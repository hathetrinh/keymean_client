import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form'
import _ from 'lodash'

import { createRequest } from './Actions'
// import FormCourse from './components/FormCourse'
// import ValidateArea from '../../../components/ValidateArea'
import { ScrollTop } from '../../../components/utils/Utilities'
import Image from './components/Image'
import ImageCover from './components/ImageCover'
import itemImg from '../../../images/background-top-item.jpg'

class CreateCourse extends Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(values) {
    this.props.createRequest(values)
  }

  componentWillReceiveProps(nextProps) {
    const submitFailed = _.get(nextProps.formCourse, 'submitFailed', false)
    if (submitFailed) {
      ScrollTop()
    }
  }

  render() {
    // const { handleSubmit, formCourse } = this.props
    // const syncErrors = _.get(formCourse, 'syncErrors', '')
    // const submitFailed = _.get(formCourse, 'submitFailed', false)
    return (
      <div id="main-content">
        <form className="container">
          <h1>Toeic 750 cho người đi làm</h1>
          <div className="course-detail-item">
            <h2>Hình ảnh</h2>
            <div className="item-content">
              <h3>Ảnh bìa</h3>
              <div className="col-xs-12">
                <ImageCover
                  src={itemImg}
                />
              </div>
              <h3>Ảnh khác</h3>
              <Image
                src={itemImg}
              />
              <Image
                src={itemImg}
              />
              <Image
                src={itemImg}
              />
              <Image
                src={itemImg}
              />
              <Image
                src={itemImg}
              />
              <Image
                src={itemImg}
              />
            </div>
          </div>
          <div className="course-detail-item">
            <h2>Tên khóa học và mô tả chi tiết</h2>
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
          <div className="course-detail-item">
            <h2>Trang thiết bị</h2>
            <div className="item-content">
              <div className="col-md-12">
                <div className="col-sm-4">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" defaultValue />Máy chiếu</label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" defaultValue />Bài tập online</label>
                  </div>
                  <div className="checkbox disabled">
                    <label>
                      <input type="checkbox" defaultValue disabled />Thầy bản ngữ</label>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" defaultValue />Loa</label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" defaultValue />Sách vở </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" defaultValue disabled />Bút thước</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="course-detail-item">
            <h2>Học phí</h2>
            <div className="item-content">
              <div className="form-group">
                <label htmlFor="usr">Học phí một người</label>
                <input type="number" className="form-control" id="usr" />
              </div>
              <div className="form-group">
                <label htmlFor="usr">Giảm giá khi đăng kí 3 người</label>
                <input type="number" className="form-control" id="usr" />
              </div>
              <div className="form-group">
                <label htmlFor="usr">Giảm giá khi đăng kí 5 người</label>
                <input type="number" className="form-control" id="usr" />
              </div>
            </div>
          </div>
          <div className="course-detail-item">
            <h2>Lịch học</h2>
            <div className="item-content">
              <div className="form-group">
                <label htmlFor="usr">Ngày bắt đầu</label>
                <input type="date" className="form-control" id="usr" />
              </div>
              <div className="form-group">
                <label htmlFor="usr">Ngày kết thúc</label>
                <input type="date" className="form-control" id="usr" />
              </div>
            </div>
          </div>
          <div className="course-detail-item">
            <button>Lưu thay đổi</button>
          </div>
        </form>
      </div>
    );
  }
}

CreateCourse.propTypes = {
  handleSubmit: PropTypes.func,
  formCourse: PropTypes.object,
}

function mapStateToProps(state) {
  const { form: { formCourse } } = state;
  return {
    formCourse,
  };
}

const formed = reduxForm({
  form: 'formCourse'
})(CreateCourse)

export default connect(mapStateToProps, { createRequest })(formed);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form'
import _ from 'lodash'

import { createRequest } from './Actions'
import FormStudent from './components/FormStudent'
import ValidateArea from '../../../components/ValidateArea'
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
    const submitFailed = _.get(nextProps.formStudent, 'submitFailed', false)
    if (submitFailed) {
      ScrollTop()
    }
  }

  render() {
    const { handleSubmit, formStudent } = this.props
    const syncErrors = _.get(formStudent, 'syncErrors', '')
    const submitFailed = _.get(formStudent, 'submitFailed', false)
    return (
      <div id="main-content">
        <form className="container" onSubmit={handleSubmit(this.onSubmit)}>
          <h1>Add thông tin học viên</h1>
          {!_.isEmpty(syncErrors) && submitFailed &&
            <ValidateArea
              message={Object.values(syncErrors)}
            />
          }
          <FormStudent />
          <div className="course-detail-item">
            <button
              type="submit"
            >Lưu thay đổi</button>
          </div>
        </form>
      </div>
    );
  }
}

Create.propTypes = {
  handleSubmit: PropTypes.func,
}

Create.defaultProps = {
  Create: [],
}

function mapStateToProps(state) {
  const { student: { students }, form: { formStudent } } = state;
  return {
    students, formStudent,
  };
}

const formed = reduxForm({
  form: 'formStudent'
})(Create)

export default connect(mapStateToProps, { createRequest })(formed);

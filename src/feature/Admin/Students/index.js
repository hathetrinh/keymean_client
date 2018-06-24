import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getDataRequest } from './Actions'


class Students extends Component {

  componentDidMount() {
    this.props.getDataRequest()
  }

  render() {
    const { students } = this.props

    return (
      <div className="col-md-9">
        <div className="listing-container">
          <div className="list-title">
            <h2>
              Danh sách học viên
            </h2>
          </div>
          <div className="list-container">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Họ tên</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Địa chỉ</th>
                </tr>
              </thead>
              <tbody>
                {students.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{`${item.firstName} ${item.lastName}`}</td>
                      <td>{item.email}</td>
                      <td>0123456789</td>
                      <td>{item.address}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Students.propTypes = {
  students: PropTypes.array,
}

Students.defaultProps = {
  students: [],
}

function mapStateToProps(state) {
  const { student: { students } } = state;
  return {
    students
  };
}

export default connect(mapStateToProps, { getDataRequest })(Students);

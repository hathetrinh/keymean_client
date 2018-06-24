import React, { Component } from 'react';
import { connect } from 'react-redux'


class Reservations extends Component {
  render() {

    return (
      <div className="col-md-9">
        <div className="listing-container">
          <div className="list-title">
            <h2>
              Danh sách đăng kí
            </h2>
          </div>
          <div className="list-container">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Ngày đăng kí</th>
                  <th>Họ tên</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>17/06/2018</td>
                  <td>Nguyễn Văn A</td>
                  <td>manh@example.com</td>
                  <td>0123456789</td>
                </tr>
                <tr>
                  <td>17/06/2018</td>
                  <td>Nguyễn Văn B</td>
                  <td>manh@example.com</td>
                  <td>0123456789</td>
                </tr>
                <tr>
                  <td>17/06/2018</td>
                  <td>Nguyễn Văn C</td>
                  <td>manh@example.com</td>
                  <td>0123456789</td>
                </tr>
                <tr>
                  <td>17/06/2018</td>
                  <td>Nguyễn Văn A</td>
                  <td>manh@example.com</td>
                  <td>0123456789</td>
                </tr>
                <tr>
                  <td>17/06/2018</td>
                  <td>Nguyễn Văn B</td>
                  <td>manh@example.com</td>
                  <td>0123456789</td>
                </tr>
                <tr>
                  <td>17/06/2018</td>
                  <td>Nguyễn Văn C</td>
                  <td>manh@example.com</td>
                  <td>0123456789</td>
                </tr>
                <tr>
                  <td>17/06/2018</td>
                  <td>Nguyễn Văn A</td>
                  <td>manh@example.com</td>
                  <td>0123456789</td>
                </tr>
                <tr>
                  <td>17/06/2018</td>
                  <td>Nguyễn Văn B</td>
                  <td>manh@example.com</td>
                  <td>0123456789</td>
                </tr>
                <tr>
                  <td>17/06/2018</td>
                  <td>Nguyễn Văn C</td>
                  <td>manh@example.com</td>
                  <td>0123456789</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
Reservations.propTypes = {

}

export default connect()(Reservations);

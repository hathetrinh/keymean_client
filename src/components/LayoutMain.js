import React from 'react'

import Header from './Header';
import Footer from './Footer';
import Notifications from './notification/Notifications';

class LayoutMain extends React.Component {

  render(){
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
        <Footer />
        <Notifications />
      </React.Fragment>
    );
  }
}

export default LayoutMain

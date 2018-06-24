import React from 'react'

import Header from './Header';
import Footer from './Footer';

class LayoutMain extends React.Component {

  render(){
    return (
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default LayoutMain

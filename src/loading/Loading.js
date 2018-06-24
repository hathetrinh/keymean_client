import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import circleProgress from '../assets/img/loading.gif';

const LoadingPage = (props) => {
  const { loading } = props
    return (
      <div>
        {!loading  && <div className="popup-area" style={{display: 'flex', opacity: 50}}>
          <div className="popup-set" style={{maxWidth: "470px"}}>
            <img src={circleProgress} width='100' height='100'alt='circle-progress' style={{marginLeft: "40%"}}/>
          </div>
        </div>
        }
      </div>
    );
}
LoadingPage.propTypes = {
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps (state) {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps)(LoadingPage)

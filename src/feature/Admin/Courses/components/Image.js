import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ src }) => (
  <div className="col-sm-6 col-md-4">
    <div className="course-photo">
      <img src={src} alt="img-course" />
    </div>
  </div>
)

Image.propTypes = {
  src: PropTypes.string,
}

export default Image

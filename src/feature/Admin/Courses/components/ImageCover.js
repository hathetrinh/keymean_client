import React from 'react'
import PropTypes from 'prop-types'

const ImageCover = ({ src }) => (
  <div className="cover-photo">
    <img src={src} alt="img-course" />
  </div>
)

ImageCover.propTypes = {
  src: PropTypes.string,
}

export default ImageCover

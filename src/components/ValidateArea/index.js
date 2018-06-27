import React from 'react'
import PropTypes from 'prop-types'

const ValidateArea = (props) => {
  const { message, showTopup = false } = props
  return (
    <div className="validate-area">
      <ul className="validate-area__list">
        {
          Array.isArray(message) ?
            message.map((error, key) =>
              <li key={key} className="validate-area__item">{error.value || error}</li>
            ) :
            (!showTopup && <li className="validate-area__item">{message}</li>)
        }
      </ul>
    </div>
  )
}

ValidateArea.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ])
}

export default ValidateArea

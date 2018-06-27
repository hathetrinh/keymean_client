import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import 'moment/locale/en-au'

import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

import { checkDateIsValid } from '../utils/DateFormat'

const FORMAT = 'YYYY/MM/DD'

class DatePickerInput extends React.Component {

  handleChangeRaw(value, id) {
    let s = document.getElementById(`date-picker_${id}`)
    if (checkDateIsValid(value, FORMAT)) {
      s.value = moment(this.props.input.value).format("DD/MM/YYYY");
    } else {
      this.props.input.value = null
      s.value = null
    }
  }

  render() {
    const { input, className, placeholder = FORMAT, disabledDays = '' } = this.props
    const disabledAfter = disabledDays === 'after'
    return (
      <DatePicker
        onChangeRaw={(event) => this.handleChangeRaw(event.target.value, input.name)}
        maxDate={disabledAfter ? moment() : null}
        selected={checkDateIsValid(input.value, FORMAT) ? moment(input.value, FORMAT) : null}
        id={`date-picker_${input.name}`}
        {...input}
        value={checkDateIsValid(input.value, FORMAT) ? moment(input.value).format(FORMAT) : null}
        dateForm={FORMAT}
        locale="en"
        autoComplete={'off'}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        className={className}
        placeholderText={placeholder}
        relativeSize={true}
      />
    )
  }
}

DatePickerInput.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  input: PropTypes.object,
}

export default DatePickerInput

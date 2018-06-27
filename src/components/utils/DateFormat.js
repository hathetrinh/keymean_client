import moment from 'moment'
export function yearMonthDay(date = new Date(), format = 'YYYY/MM/DD') {
  if (!date) {
    return ''
  }
  return moment(date).format(format)
}

export function dateFormater(
  date = new Date(),
  newFormat = 'YYYY/MM/DD',
  currentFormat = ['YYYY-MM-DD HH:mm:ss', 'YYYY/MM/DD']
) {
  if (!date) {
    return ''
  }
  const dateConvert = new Date(moment(date, currentFormat))
  return moment(dateConvert).format(newFormat)
}


export function checkDateIsValid(date, format = 'YYYY/MM/DD') {
  if (!date) {
    return false
  }
  return moment(date, `${format}`, true).isValid()
}

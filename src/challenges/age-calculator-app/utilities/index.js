import {
  FIRST_MONTH_NUMBER_FROM_YEAR,
  LAST_MONTH_NUMBER_FROM_YEAR,
  LESS_DAY_PER_MONTH,
  MOST_DAY_PER_MONTH,
  notBlankRegex,
} from '../constants'

export function addZeros(numero, longitud) {
  return numero.toString().padStart(longitud, '0')
}

export function isValidDay(day) {
  return day >= LESS_DAY_PER_MONTH && day <= MOST_DAY_PER_MONTH
}

export function isValidMonth(month) {
  return !notBlankRegex.test(month) && month >= FIRST_MONTH_NUMBER_FROM_YEAR && month <= LAST_MONTH_NUMBER_FROM_YEAR
}

export function isValidYear(year, now) {
  return !notBlankRegex.test(year) && year < now.getFullYear()
}

export function isWithinValidDateRange(month, year, now) {
  return isValidMonth(month) && isValidYear(year, now)
}

export function validateDate(dateString) {
  const dateRegex =
    /^(?!0000)(?!.*?-(?:0[2469]|11)-(?:31))(\d{4})-(?:(?:0[1-9]|1[0-2])|(?!02)(?:0[13-9]|1[0-2]))-(?:(?:0[1-9])|(?:1|2)[0-9]|3[0-1]|(?:0[1-9])|(?:(?!0000)[0-9]{2}-(?!02)(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]))|30)(?:(?=\x20\d)\x20|$)/

  if (!dateRegex.test(dateString)) {
    return false
  }

  const [year, month, day] = dateString.split('-').map(Number)
  const daysInMonth = [31, (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  return day <= daysInMonth[month - 1]
}

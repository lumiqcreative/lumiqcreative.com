import { parseISO, format } from 'date-fns'

const DateFormatter = (date: string) => {
  const parsedDate = parseISO(date)
  return format(parsedDate, 'dd MMM, yyyy')
}

export default DateFormatter

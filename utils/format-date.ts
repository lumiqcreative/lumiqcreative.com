import { parseISO, format } from 'date-fns'

const formatDate = (date: string): string => {
  const parsedDate = parseISO(date)
  return format(parsedDate, 'dd MMM, yyyy')
}

export default formatDate

import { format, parseISO } from 'date-fns'

const formatDate = (date: string): string => {
  const parsedDate = parseISO(date)
  const formattedDate = format(parsedDate, 'MMMM d, yyyy')
  return formattedDate
}

export default formatDate

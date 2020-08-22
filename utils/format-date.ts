import { format, parseISO } from 'date-fns'

const formatDate = (date: string): string => {
  const parsedDate = parseISO(date)
  const formattedDate = format(parsedDate, 'dd MMM, yyyy')
  return formattedDate
}

export default formatDate

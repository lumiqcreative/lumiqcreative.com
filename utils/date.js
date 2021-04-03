const formatDate = date => {
  const parsedDate = new Date(date)
  const formattedMonth = Intl.DateTimeFormat('en-UK', { month: 'long' }).format(
    parsedDate
  )
  const formattedDay = Intl.DateTimeFormat('en-UK', { day: 'numeric' }).format(
    parsedDate
  )
  const formattedYear = Intl.DateTimeFormat('en-UK', {
    year: 'numeric'
  }).format(parsedDate)
  const formattedDate = `${formattedMonth} ${formattedDay}, ${formattedYear}`
  return formattedDate
}

export { formatDate }

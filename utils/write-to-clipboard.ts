const writeToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
}

export default writeToClipboard

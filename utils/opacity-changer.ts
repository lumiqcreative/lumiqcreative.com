const OpacityChanger = (color: string, opacity: number): string | undefined => {
  let editedColor
  if (color.toString().startsWith('hsla') && opacity >= 0 && opacity <= 1) {
    editedColor = color.replace(/ .\)/, ` ${opacity.toString()})`)
  }
  return editedColor
}

export default OpacityChanger

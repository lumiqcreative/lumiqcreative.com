const applyAlpha = (color: string, opacity: number): string | undefined => {
  let outputColor
  if (
    color.match(
      /^hsla[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*,\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/
    ) &&
    opacity >= 0 &&
    opacity <= 1
  ) {
    outputColor = color.replace(/( )(.)(\))/, '$1' + opacity.toString() + '$3')
  }
  return outputColor
}

export default applyAlpha

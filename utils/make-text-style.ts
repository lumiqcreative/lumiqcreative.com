import { css, SerializedStyles } from '@emotion/core'

const makeTextStyle = (fontFamily: 1 | 2, rules: SerializedStyles) =>
  css(
    {
      margin: 0,
      display: 'block',
      fontFamily:
        fontFamily === 1
          ? '"Graphik", "Inter", sans-serif'
          : '"Inter", sans-serif'
    },
    rules
  )

export default makeTextStyle

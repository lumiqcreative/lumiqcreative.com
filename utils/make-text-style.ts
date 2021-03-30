import { css, SerializedStyles } from '@emotion/react'

const makeTextStyle = (rules: SerializedStyles) =>
  css(
    {
      margin: 0,
      display: 'block',
      fontFamily: '"Work Sans", sans-serif'
    },
    rules
  )

export default makeTextStyle

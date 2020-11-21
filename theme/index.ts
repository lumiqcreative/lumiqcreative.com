import makeTextStyle from 'utils/make-text-style'
import { css } from '@emotion/react'

const colors = {
  accent: 'hsla(256, 100%, 56%, 1)',
  border: 'hsla(240, 16%, 92%, 1)',
  onAccent: 'hsla(0, 0%, 100%, 1)',
  onSurface: {
    primary: 'hsla(0, 0%, 0%, 1)',
    secondary: 'hsla(240, 16%, 64%, 1)'
  },
  surface: {
    primary: 'hsla(0, 0%, 100%, 1)',
    secondary: 'hsla(240, 16%, 96%, 1)'
  }
}

const breakpoints = [720, 1080]

const media = breakpoints.map(
  breakpoint => `@media (min-width: ${breakpoint}px)`
)

const textStyles = {
  title: {
    primary: makeTextStyle(
      1,
      css({
        fontSize: 36,
        fontWeight: 600,
        letterSpacing: '-0.03em',
        lineHeight: '42px',
        [media[0]]: {
          fontSize: 42,
          lineHeight: '50px'
        },
        [media[1]]: {
          fontSize: 54,
          lineHeight: '64px'
        }
      })
    ),
    secondary: makeTextStyle(
      2,
      css({
        fontSize: 20,
        letterSpacing: '-0.01em',
        fontWeight: 600,
        lineHeight: '24px'
      })
    )
  },
  subtitle: makeTextStyle(
    2,
    css({
      fontWeight: 500,
      lineHeight: '24px',
      fontSize: 17,
      letterSpacing: '-0.01em'
    })
  ),
  body: {
    primary: makeTextStyle(
      2,
      css({
        fontWeight: 400,
        lineHeight: '24px',
        fontSize: 17,
        letterSpacing: '-0.01em'
      })
    ),
    secondary: makeTextStyle(
      2,
      css({ fontWeight: 400, lineHeight: '20px', fontSize: 15 })
    )
  },
  button: {
    primary: makeTextStyle(
      2,
      css({
        fontWeight: 500,
        lineHeight: '24px',
        fontSize: 17,
        letterSpacing: '-0.01em'
      })
    ),
    secondary: makeTextStyle(
      2,
      css({ fontWeight: 500, lineHeight: '20px', fontSize: 15 })
    )
  }
}

export { colors, media, textStyles }

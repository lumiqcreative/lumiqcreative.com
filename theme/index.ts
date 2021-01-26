import makeTextStyle from 'utils/make-text-style'
import { css } from '@emotion/react'

const colors = {
  accent: 'hsla(256, 100%, 56%, 1)',
  border: 'hsla(240, 16%, 92%, 1)',
  onAccent: 'hsla(0, 0%, 100%, 1)',
  onSurface: ['hsla(0, 0%, 0%, 1)', 'hsla(240, 16%, 64%, 1)'],
  surface: ['hsla(0, 0%, 100%, 1)', 'hsla(240, 16%, 96%, 1)']
}

const breakpoints = [720, 1080]

const media = breakpoints.map(
  breakpoint => `@media (min-width: ${breakpoint}px)`
)

const textStyles = {
  title: [
    makeTextStyle(
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
    makeTextStyle(
      2,
      css({
        fontSize: 20,
        letterSpacing: '-0.01em',
        fontWeight: 600,
        lineHeight: '24px'
      })
    )
  ],
  subtitle: makeTextStyle(
    2,
    css({
      fontWeight: 500,
      lineHeight: '24px',
      fontSize: 17,
      letterSpacing: '-0.01em'
    })
  ),
  body: [
    makeTextStyle(
      2,
      css({
        fontWeight: 400,
        lineHeight: '24px',
        fontSize: 17,
        letterSpacing: '-0.01em'
      })
    ),
    makeTextStyle(2, css({ fontWeight: 400, lineHeight: '20px', fontSize: 15 }))
  ],
  button: [
    makeTextStyle(
      2,
      css({
        fontWeight: 500,
        lineHeight: '24px',
        fontSize: 17,
        letterSpacing: '-0.01em'
      })
    ),
    makeTextStyle(2, css({ fontWeight: 500, lineHeight: '20px', fontSize: 15 }))
  ]
}

export { colors, media, textStyles }

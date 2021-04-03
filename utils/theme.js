const breakpoints = [720, 1080]

const media = breakpoints.map(
  breakpoint => `@media (min-width: ${breakpoint}px)`
)

const typography = {
  h1: {
    fontSize: 36,
    fontWeight: 600,
    letterSpacing: '-0.04em',
    lineHeight: '42px',
    [media[0]]: {
      fontSize: 42,
      lineHeight: '50px'
    },
    [media[1]]: {
      fontSize: 54,
      lineHeight: '64px'
    }
  },
  body1: {
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: '-0.01em',
    lineHeight: '24px'
  },
  button: {
    fontWeight: 500,
    lineHeight: '24px',
    fontSize: 16,
    letterSpacing: '-0.01em'
  },
  subtitle: {
    fontSize: 20,
    letterSpacing: '-0.02em',
    fontWeight: 600,
    lineHeight: '24px'
  }
}

const colors = {
  surface: ['hsl(0, 0%, 100%)', 'hsla(240, 16%, 96%, 1)'],
  onSurface: ['hsl(0, 0%, 0%)', 'hsl(240, 12%, 50%)'],
  accent: 'hsl(256, 100%, 56%)'
}

export { typography, media, colors }

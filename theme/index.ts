const colors = {
  accent: 'hsla(256, 100%, 56%, 1)',
  surface: 'hsla(0, 0%, 100%, 1)',
  onSurface: 'hsla(0, 0%, 0%, 1)',
  onSurfaceMedium: 'hsla(240, 16%, 64%, 1)',
  border: 'hsla(240, 16%, 92%, 1)',
  surfaceOverlay: 'hsla(240, 16%, 96%, 1)'
}

const breakpoints = [720, 1080]

const media = breakpoints.map(
  (breakpoint) => `@media (min-width: ${breakpoint}px)`
)

export { colors, media }

const colors = {
  accent: 'hsl(256, 100%, 56%)',
  surface: 'hsl(0, 0%, 100%)',
  onSurface: 'hsl(0, 0%, 0%)',
  onSurfaceMedium: 'hsl(240, 16%, 64%)',
  border: 'hsl(240, 16%, 92%)'
}

const breakpoints = [720, 1080]

const media = breakpoints.map(
  (breakpoint) => `@media (min-width: ${breakpoint}px)`
)

export { colors, media }

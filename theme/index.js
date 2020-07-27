const colors = {
  accent: "hsl(264, 100%, 50%)",
  surface: "hsl(0, 0%, 100%)",
  onSurface: "hsl(0, 0%, 0%)",
  onSurfaceMedium: "hsl(264, 16%, 64%)",
  border: "hsl(264, 16%, 88%)",
};

const breakpoints = [720, 1080];

const media = breakpoints.map(
  (breakpoint) => `@media (min-width: ${breakpoint}px)`
);

export { colors, media };

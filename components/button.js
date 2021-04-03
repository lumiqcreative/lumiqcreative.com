import { colors, typography } from '../utils/theme'
import Text from './text'

const Button = ({ href, children }) => (
  <a
    css={{
      height: 48,
      padding: '0 16px',
      border: `1px solid ${colors.accent}`,
      color: colors.accent,
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 4,
      textDecoration: 'none',
      '&:hover': {
        borderColor: colors.onSurface[0],
        color: colors.onSurface[0]
      }
    }}
    href={href}
  >
    <Text textStyle={typography.button}>{children}</Text>
  </a>
)

export default Button

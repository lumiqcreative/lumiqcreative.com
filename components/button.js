import { colors, typography } from '../utils/theme'
import Text from './text'
import Link from 'next/link'

const styles = {
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
}

const Button = ({ href, children, asLink }) => {
  if (asLink === true) {
    return (
      <Link href={href} passHref>
        <a css={styles}>
          <Text textStyle={typography.button}>{children}</Text>
        </a>
      </Link>
    )
  } else {
    return (
      <a css={styles} href={href}>
        <Text textStyle={typography.button}>{children}</Text>
      </a>
    )
  }
}

export default Button

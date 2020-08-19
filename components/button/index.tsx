import { colors } from 'theme'
import OpacityChanger from 'utils/opacity-changer'

type Props = {
  href: string
  className?: string
  children: React.ReactNode
}

const Button = ({ href, className, children }: Props): JSX.Element => {
  return (
    <a
      css={{
        alignItems: 'center',
        background: OpacityChanger(colors.accent, 0.12),
        borderRadius: 18,
        color: colors.accent,
        display: 'flex',
        fontFamily: '"Inter"',
        fontSize: 15,
        fontWeight: 500,
        height: 36,
        letterSpacing: '-0.01em',
        padding: '0 16px',
        textDecoration: 'none',
        transition: 'background 0.2s ease, color 0.2s ease',
        whiteSpace: 'nowrap',
        '&:hover': {
          background: colors.accent,
          color: 'white',
          transition: 'background 0.2s ease, color 0.2s ease'
        }
      }}
      href={href}
      className={className}
    >
      {children}
    </a>
  )
}

export default Button

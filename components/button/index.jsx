import { colors } from 'theme'

const Button = (props) => {
  return (
    <a
      css={{
        alignItems: 'center',
        border: `1px solid ${colors.accent}`,
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
      href={props.href}
      className={props.className}
    >
      {props.children}
    </a>
  )
}

export default Button

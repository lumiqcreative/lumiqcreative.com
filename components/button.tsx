import { colors, textStyles } from 'theme'
import { forwardRef, ReactNode } from 'react'
import applyAlpha from 'utils/apply-alpha'

type Props = {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

const Button = forwardRef<HTMLAnchorElement, Props>(
  (
    { children, className = '', href = '', onClick = () => null }: Props,
    ref
  ): JSX.Element => {
    return (
      <a
        className={className}
        css={[
          textStyles.button.secondary,
          {
            alignItems: 'center',
            background: applyAlpha(colors.accent, 0.12),
            borderRadius: 18,
            color: colors.accent,
            display: 'flex',
            height: 36,
            justifyItems: 'center',
            padding: '0 16px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            transition: 'background 0.2s ease, color 0.2s ease',
            '&:hover': {
              background: colors.accent,
              color: colors.onAccent,
              transition: 'background 0.2s ease, color 0.2s ease'
            }
          }
        ]}
        href={href}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </a>
    )
  }
)

export default Button

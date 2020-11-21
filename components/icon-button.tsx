import { css } from '@emotion/react'
import { forwardRef } from 'react'
import { colors } from 'theme'

type Props = {
  className?: string
  iconName: 'copy' | 'get'
} & (
  | { as: 'a'; href: string; onClick?: () => void }
  | { as: 'button'; onClick: () => void; href?: string }
)

const IconButton = forwardRef<HTMLAnchorElement, Props>(
  (
    { as, className = '', href = '', iconName, onClick = () => null }: Props,
    ref
  ): JSX.Element => {
    const icon = (
      <svg viewBox='0 0 24 24' width='24' height='24' fill='none'>
        {iconName === 'get' && (
          <>
            <path
              strokeLinecap='round'
              strokeWidth='1.5'
              d='M4 12.5v2.67c0 1.708 0 2.563.338 3.213a3 3 0 001.28 1.28C6.267 20 7.121 20 8.83 20h6.34c1.708 0 2.563 0 3.213-.338a2.999 2.999 0 001.28-1.28c.337-.65.337-1.504.337-3.212V12.5'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M12 3.5V16m0 0l-4.5-4.5M12 16l4.5-4.5'
            />
          </>
        )}
        {iconName === 'copy' && (
          <>
            <path
              strokeLinecap='round'
              strokeWidth='1.5'
              d='M15 6v-.28c0-.952 0-1.428-.185-1.792a1.7 1.7 0 00-.743-.743C13.708 3 13.232 3 12.28 3H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C3 4.52 3 5.08 3 6.2v6c0 .98 0 1.47.19 1.845.169.329.436.597.766.764C4.33 15 4.82 15 5.8 15H6'
            />
            <rect width='12' height='12' x='9' y='9' strokeWidth='1.5' rx='2' />
          </>
        )}
      </svg>
    )

    const styles = css({
      alignItems: 'center',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      height: 48,
      justifyContent: 'center',
      outline: 'none',
      stroke: colors.accent,
      width: 48,
      transition: '0.2s ease stroke, transform 0.15s ease',
      '&:hover': {
        stroke: colors.onSurface.primary
      },
      '&:active': {
        transform: 'scale(0.9)'
      }
    })

    if (as === 'a') {
      return (
        <a
          className={className}
          css={styles}
          href={href}
          onClick={onClick}
          ref={ref}
        >
          {icon}
        </a>
      )
    } else {
      return (
        <button className={className} css={styles} onClick={onClick}>
          {icon}
        </button>
      )
    }
  }
)

export default IconButton

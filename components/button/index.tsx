import Link from 'next/link'
import { css } from '@emotion/core'
import applyAlpha from 'utils/apply-alpha'
import { colors, fonts } from 'theme'

type Props = {
  href: string
  className?: string
  children: string
  destination: 'internal' | 'external'
}

const Button = ({
  href,
  className,
  destination,
  children
}: Props): JSX.Element => {
  let element
  const styles = css({
    alignItems: 'center',
    background: applyAlpha(colors.accent, 0.12),
    borderRadius: 18,
    color: colors.accent,
    display: 'flex',
    fontFamily: fonts.body,
    fontSize: 15,
    fontWeight: 500,
    height: 36,
    letterSpacing: '-0.01em',
    padding: '0 16px',
    textDecoration: 'none',
    transition: 'background 0.2s ease, color 0.2s ease',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    '&:hover': {
      background: colors.accent,
      color: 'white',
      transition: 'background 0.2s ease, color 0.2s ease'
    }
  })
  if (destination == 'internal') {
    element = (
      <Link href={href} passHref={true}>
        <a className={className} css={styles}>
          {children}
        </a>
      </Link>
    )
  } else {
    element = (
      <a className={className} href={href} css={styles}>
        {children}
      </a>
    )
  }
  return element
}

export default Button

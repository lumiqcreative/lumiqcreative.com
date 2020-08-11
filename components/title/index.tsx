import { media } from 'theme'
import { jsx } from '@emotion/core'

type Props = {
  as: string
  variant: 1 | 3
  children: React.ReactNode
  className: string
}

const Title = ({ as, variant, children, className }: Props) => {
  return jsx(
    as,
    {
      className: className,
      css: [
        { margin: 0 },
        variant === 1 && {
          fontFamily: '"Graphik", "Inter"',
          fontSize: 40,
          letterSpacing: '-0.03em',
          fontWeight: 600,
          [media[0]]: {
            fontSize: 44,
            lineHeight: '52px'
          },
          [media[1]]: {
            fontSize: 56,
            lineHeight: '64px'
          }
        },
        variant === 3 && {
          fontFamily: '"Inter"',
          fontSize: 21,
          letterSpacing: '-0.01em',
          fontWeight: 600
        }
      ]
    },
    children
  )
}

export default Title

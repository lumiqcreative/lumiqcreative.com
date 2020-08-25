import { jsx } from '@emotion/core'
import { ReactNode } from 'react'
import { media, colors, fonts } from 'theme'

type Props = {
  as: string
  category: 'body' | 'title'
  children: ReactNode
  className?: string
  variant: number
}

const Typography = ({
  as,
  category,
  children,
  className,
  variant
}: Props): JSX.Element => {
  return jsx(
    as,
    {
      css: [
        { margin: 0, color: colors.onSurface },
        category === 'body' && [
          { fontWeight: 400, fontFamily: fonts.body },
          variant === 2 && { fontSize: 15, lineHeight: '20px' },
          variant === 1 && { fontSize: 17, lineHeight: '24px' }
        ],
        category === 'title' && [
          { fontWeight: 600 },
          variant === 1 && {
            fontSize: 36,
            lineHeight: '44px',
            fontFamily: fonts.title,
            letterSpacing: '-0.03em',
            [media[0]]: {
              fontSize: 44,
              lineHeight: '52px'
            },
            [media[1]]: {
              fontSize: 56,
              lineHeight: '64px'
            }
          },
          variant === 2 && {
            fontSize: 20,
            fontFamily: fonts.body,
            letterSpacing: '-0.01em'
          }
        ]
      ],
      className: className
    },
    children
  )
}

export default Typography

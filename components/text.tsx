import { ReactNode } from 'react'
import { colors, textStyles } from 'theme'
import { SerializedStyles } from '@emotion/react'

type Props = {
  as: 'p' | `h${1 | 2 | 3 | 4 | 5 | 6}` | 'figcaption'
  children: ReactNode
  className?: string
  style: `title${1 | 2}` | 'subtitle' | `body${1 | 2}`
}

const Text = ({ as, children, style, className }: Props): JSX.Element => {
  const Root = as
  let styles: SerializedStyles

  switch (style) {
    case 'title1':
      styles = textStyles.title.primary
      break
    case 'title2':
      styles = textStyles.title.secondary
      break
    case 'subtitle':
      styles = textStyles.subtitle
      break
    case 'body1':
      styles = textStyles.body.primary
      break
    case 'body2':
      styles = textStyles.body.secondary
      break
  }

  return (
    <Root
      className={className}
      css={[
        styles,
        {
          a: {
            color: colors.accent,
            textDecoration: 'none',
            '&:hover': { color: colors.onSurface.primary }
          }
        }
      ]}
    >
      {children}
    </Root>
  )
}

export default Text

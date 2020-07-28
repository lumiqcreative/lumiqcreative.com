import { media } from 'theme'
import { jsx } from '@emotion/core'

const Title = (props) => {
  return jsx(
    props.as,
    {
      className: props.className,
      css: [
        { margin: 0 },
        props.variant === 1 && {
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
        props.variant === 3 && {
          fontFamily: '"Inter"',
          fontSize: 21,
          letterSpacing: '-0.01em',
          fontWeight: 600
        }
      ]
    },
    props.children
  )
}

export default Title

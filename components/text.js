import styled from 'styled-components'
import { colors } from '../utils/theme'

const Root = styled.p(
  {
    margin: 0,
    fontFamily: 'Work Sans, sans-serif',
    '& > a': {
      color: colors.accent,
      textDecoration: 'none',
      '&:hover': { color: colors.onSurface[0] }
    }
  },
  props => props.textStyle
)

const Text = ({ children, className, textStyle, renderAs }) => {
  return (
    <Root as={renderAs} className={className} textStyle={textStyle}>
      {children}
    </Root>
  )
}

export default Text

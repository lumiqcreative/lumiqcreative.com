import { MDXProvider } from '@mdx-js/react'
import { colors, typography } from '../utils/theme'
import Container from './container'
import Text from './text'

const smartMargin = {
  margin: 0,
  '&:not(:first-child)': { marginTop: 24 }
}

const components = {
  p: props => (
    <Text css={smartMargin} textStyle={typography.body1} {...props} />
  ),
  li: props => <Text textStyle={typography.body1} {...props} renderAs='li' />,
  ul: props => <ul css={smartMargin} {...props} />,
  a: props => (
    <a
      {...props}
      css={{
        color: colors.accent,
        textDecoration: 'none',
        '&:hover': { color: colors.onSurface[0] }
      }}
    />
  )
}

const MarkdownContainer = ({ children, narrow }) => (
  <Container narrow={narrow}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </Container>
)

export default MarkdownContainer

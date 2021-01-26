import { colors } from 'theme'
import Container from 'components/container'
import Text from 'components/text'

const Footer = (): JSX.Element => (
  <Container>
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: 56,
        boxSizing: 'content-box',
        height: 64
      }}
    >
      <Text
        style='body2'
        as='p'
        css={{ color: colors.onSurface[0], margin: 'auto 0' }}
      >
        &copy; 2018–{new Date().getFullYear()} Patryk Michalik
      </Text>
    </div>
  </Container>
)

export default Footer

import { media, typography } from '../utils/theme'
import Button from './button'
import Container from './container'
import Spacer from './spacer'
import Text from './text'

const Hero = () => (
  <div css={{ padding: '64px 0' }}>
    <Container>
      <Text
        textStyle={typography.h1}
        css={{
          maxWidth: 400,
          [media[0]]: { maxWidth: 470 },
          [media[1]]: { maxWidth: 600 }
        }}
        renderAs='h1'
      >
        I ar&shy;range shapes, command com&shy;pu&shy;ters, and put
        to&shy;ge&shy;ther words.
      </Text>
      <Spacer height={24} />
      <Button href='mailto:contact@patrykmichalik.com'>Get in Touch</Button>
    </Container>
  </div>
)

export default Hero

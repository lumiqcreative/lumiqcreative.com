import Spacer from './spacer'
import Container from './container'
import { typography } from '../utils/theme'
import Text from './text'

const Footer = () => (
  <div css={{ alignSelf: 'flex-end', width: '100%', marginTop: 'auto' }}>
    <Spacer height={48} />
    <Container css={{ height: 64, display: 'flex', alignItems: 'center' }}>
      <Text textStyle={typography.body1}>
        © 2018–{new Date().getFullYear()} Patryk Michalik
      </Text>
    </Container>
  </div>
)

export default Footer

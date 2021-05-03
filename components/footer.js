import Spacer from './spacer'
import Container from './container'
import { media, typography } from '../utils/theme'
import Text from './text'
import SocialButton from './social-button'

const Footer = () => (
  <div css={{ alignSelf: 'flex-end', width: '100%', marginTop: 'auto' }}>
    <Spacer height={48} />
    <Container
      css={{
        display: 'grid',
        alignItems: 'center',
        gridAutoFlow: 'row',
        justifyContent: 'space-between',
        gridRowGap: 8,
        paddingBottom: 20,
        [media[0]]: {
          gridAutoFlow: 'column',
          height: 64,
          paddingBottom: 0
        }
      }}
    >
      <Text textStyle={typography.body1}>
        © 2018–{new Date().getFullYear()} Patryk Michalik
      </Text>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          marginLeft: -10,
          [media[0]]: { marginLeft: 0, marginRight: -10 }
        }}
      >
        <SocialButton
          href='https://twitter.com/patrykmichalik_'
          icon='twitter'
        />
        <SocialButton
          href='https://dribbble.com/patrykmichalik'
          icon='dribbble'
        />
        <SocialButton href='https://github.com/patrykmichalik' icon='github' />
      </div>
    </Container>
  </div>
)

export default Footer

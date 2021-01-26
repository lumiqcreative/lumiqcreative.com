import { colors } from 'theme'
import Container from 'components/container'
import Link from 'next/link'
import Logo from 'components/logo'
import IconButton from './icon-button'

const Header = (): JSX.Element => (
  <div
    css={{
      background: colors.surface[0],
      position: 'fixed',
      width: '100%',
      zIndex: 1
    }}
  >
    <Container
      css={{
        alignItems: 'center',
        display: 'flex',
        height: 64,
        justifyContent: 'space-between'
      }}
    >
      <Link href='/' passHref>
        <a css={{ display: 'flex', height: '100%', marginRight: 24 }}>
          <Logo />
        </a>
      </Link>
      <div css={{ display: 'grid', gridAutoFlow: 'column' }}>
        <IconButton
          iconName='twitter'
          href='https://twitter.com/patrykmichalik_'
          as='a'
        />
        <IconButton
          iconName='github'
          href='https://github.com/patrykmichalik'
          as='a'
        />
      </div>
    </Container>
  </div>
)

export default Header

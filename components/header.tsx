import { colors } from 'theme'
import Button from './button'
import Container from 'components/container'
import Link from 'next/link'
import Logo from 'components/logo'

const Header = (): JSX.Element => (
  <div
    css={{
      background: colors.surface.primary,
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
      <Button href='mailto:contact@lumiqcreative.com'>Get in Touch</Button>
    </Container>
  </div>
)

export default Header

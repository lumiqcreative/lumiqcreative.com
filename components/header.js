import { colors } from '../utils/theme'
import Container from './container'
import Logo from './logo'
import Link from 'next/link'

const Header = () => (
  <div
    css={{
      width: '100%',
      height: 64,
      background: colors.surface[0]
    }}
  >
    <Container css={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
    </Container>
  </div>
)

export default Header

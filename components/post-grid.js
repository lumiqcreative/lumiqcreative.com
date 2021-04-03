import Container from './container'
import { media } from '../utils/theme'

const PostGrid = ({ children }) => (
  <Container
    css={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridColumnGap: 24,
      gridRowGap: 48,
      [media[0]]: {
        gridTemplateColumns: 'repeat(2, 1fr)'
      },
      [media[1]]: {
        gridTemplateColumns: 'repeat(3, 1fr)'
      }
    }}
  >
    {children}
  </Container>
)

export default PostGrid

import Container from '../components/container'
import Layout from '../components/layout'
import Text from '../components/text'
import { typography } from '../utils/theme'
import Button from '../components/button'
import Spacer from '../components/spacer'

const PageNotFound = () => (
  <Layout title='Page Not Found'>
    <Container
      css={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 176px)',
        justifyContent: 'center',
        paddingTop: 32,
        paddingBottom: 32
      }}
    >
      <Text textStyle={typography.h1} as='h1'>
        Page Not Found
      </Text>
      <Spacer height={16} />
      <Text textStyle={typography.body1} as='h1'>
        It may have been moved, or there may be an error in the link.
      </Text>
      <Spacer height={16} />
      <Button href='/' asLink>
        Go to Home Page
      </Button>
    </Container>
  </Layout>
)

export default PageNotFound

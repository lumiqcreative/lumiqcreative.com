import Button from 'components/button'
import Layout from 'components/layout'
import Text from 'components/text'
import Link from 'next/link'

const PageNotFound = (): JSX.Element => (
  <Layout title='Page Not Found' blank>
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100vh'
      }}
    >
      <Text as='h1' style='title1'>
        Page Not Found
      </Text>
      <Link href='/' passHref>
        <Button css={{ marginTop: 20 }}>Go Back Home</Button>
      </Link>
    </div>
  </Layout>
)

export default PageNotFound

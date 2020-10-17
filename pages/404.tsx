import Button from 'components/button'
import Typography from 'components/typography'
import Page from 'components/page'

const notFound = () => {
  return (
    <Page titlePrefix="Page Not Found" blank>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          minHeight: '100vh',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography as="h1" category="title" variant={1}>
          Page Not Found
        </Typography>
        <Button destination="internal" href="/" css={{ marginTop: 20 }}>
          Go Back Home
        </Button>
      </div>
    </Page>
  )
}

export default notFound

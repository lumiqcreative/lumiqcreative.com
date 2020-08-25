import Typography from 'components/typography'
import Container from 'components/container'
import { colors } from 'theme'

const Footer = (): JSX.Element => {
  return (
    <footer>
      <Container>
        <div
          css={{
            paddingTop: 56,
            boxSizing: 'content-box',
            height: 64,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Typography
            category="body"
            variant={2}
            as="p"
            css={{ color: colors.onSurface, margin: 'auto 0' }}
          >
            &copy; 2018–{new Date().getFullYear()} Lumiq Creative
          </Typography>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

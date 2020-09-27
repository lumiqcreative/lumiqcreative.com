import Container from 'components/container'
import { colors, media } from 'theme'
import Typography from 'components/typography'

type Props = {
  title: string
  subtitle?: string
  meta?: string
}

const Hero = ({ title, subtitle, meta }: Props): JSX.Element => {
  return (
    <Container>
      <div
        css={{
          padding: '112px 0 48px 0',
          [media[0]]: { padding: '128px 0 64px 0' }
        }}
      >
        <Typography
          css={{
            color: colors.onSurface,
            hyphens: 'auto',
            maxWidth: 460,
            [media[0]]: { hyphens: 'none', maxWidth: 500 },
            [media[1]]: { maxWidth: 660 }
          }}
          as="h1"
          category="title"
          variant={1}
        >
          {title}
        </Typography>
        { subtitle &&
          <Typography
            css={{ marginTop: 14, color: colors.onSurface }}
            category="body"
            variant={1}
            as="p"
          >
            {subtitle}
          </Typography>
        }
        { meta &&
          <Typography
            css={{ marginTop: 14, color: colors.onSurfaceMedium }}
            category="body"
            variant={1}
            as="p"
          >
            {meta}
          </Typography>
        }
      </div>
    </Container>
  )
}

export default Hero

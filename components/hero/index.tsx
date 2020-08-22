import Container from 'components/container'
import Title from 'components/title'
import { colors, media } from 'theme'
import Body from 'components/body'

type Props = {
  title: string
  subtitle?: string
}

const Hero = ({ title, subtitle }: Props): JSX.Element => {
  return (
    <Container>
      <div
        css={{
          padding: '112px 0 48px 0',
          [media[0]]: { padding: '128px 0 64px 0' }
        }}
      >
        <Title
          css={{
            color: colors.onSurface,
            hyphens: 'auto',
            maxWidth: 460,
            [media[0]]: { hyphens: 'none', maxWidth: 500 },
            [media[1]]: { maxWidth: 620 }
          }}
          as="h1"
          variant={1}
        >
          {title}
        </Title>
        <Body css={{ marginTop: 12, color: colors.onSurface }} size="large">
          {subtitle}
        </Body>
      </div>
    </Container>
  )
}

export default Hero

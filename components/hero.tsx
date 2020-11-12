import { media, colors } from 'theme'
import Container from 'components/container'
import Text from 'components/text'
import { ReactNode } from 'react'

type Props = {
  detail?: ReactNode
  title: string
  subtitle?: string
}

const Hero = ({ detail, title, subtitle }: Props): JSX.Element => (
  <Container>
    <div
      css={{
        padding: '112px 0 48px 0',
        [media[0]]: { padding: '128px 0 64px 0' }
      }}
    >
      <Text
        as='h1'
        css={{
          color: colors.onSurface.primary,
          hyphens: 'auto',
          maxWidth: 460,
          [media[0]]: { hyphens: 'none', maxWidth: 500 },
          [media[1]]: { maxWidth: 600 }
        }}
        style='title1'
      >
        {title}
      </Text>
      {subtitle && (
        <Text
          as='p'
          css={{ color: colors.onSurface.primary, marginTop: 14 }}
          style='body1'
        >
          {subtitle}
        </Text>
      )}
      {detail && (
        <Text
          as='p'
          css={{ color: colors.onSurface.secondary, marginTop: 14 }}
          style='body2'
        >
          {detail}
        </Text>
      )}
    </div>
  </Container>
)

export default Hero

import { colors } from 'theme'
import Typography from 'components/typography'

type Props = {
  title: string
  summary: string
  published: string
  cover: string
}

const WorkDetails = ({
  title,
  summary,
  published,
  cover
}: Props): JSX.Element => (
  <>
    <picture
      css={{
        background: colors.surfaceOverlay,
        height: 0,
        paddingBottom: `${(9 / 16) * 100}%`,
        display: 'block'
      }}
    >
      <img css={{ width: '100%' }} src={cover} />
    </picture>
    <Typography
      as="h3"
      category="title"
      variant={2}
      css={{ color: colors.onSurface, marginTop: 24 }}
    >
      {title}
    </Typography>
    <Typography
      category="body"
      variant={2}
      as="p"
      css={{ marginTop: 12, color: colors.onSurface }}
    >
      {summary}
    </Typography>
    <Typography
      category="body"
      variant={2}
      as="p"
      css={{ marginTop: 12, color: colors.onSurfaceMedium }}
    >
      {published}
    </Typography>
  </>
)

export default WorkDetails

import { colors } from 'theme'
import Typography from 'components/typography'
import Image from 'next/image'

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
    <Image
      src={cover}
      width={1920}
      height={1080}
      css={{ background: colors.surfaceOverlay }}
    />
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

import { colors } from 'theme'
import Typography from 'components/typography'

type Props = {
  title: string
  summary: string
  published: string
}

const WorkDetails = ({ title, summary, published }: Props): JSX.Element => (
  <>
    <Typography
      as="h3"
      category="title"
      variant={2}
      css={{ color: colors.onSurface }}
    >
      {title}
    </Typography>
    <Typography
      category="body"
      variant={2}
      as="p"
      css={{ marginTop: 8, color: colors.onSurface }}
    >
      {summary}
      <span
        css={{
          display: 'inline',
          color: colors.onSurfaceMedium
        }}
      >
        {' ' + published}
      </span>
    </Typography>
  </>
)

export default WorkDetails

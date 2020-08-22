import { colors } from 'theme'
import Body from 'components/body'
import Title from 'components/title'

type Props = {
  title: string
  summary: string
  published: string
}

const WorkDetails = ({ title, summary, published }: Props): JSX.Element => (
  <>
    <Title as="h3" variant={3} css={{ color: colors.onSurface }}>
      {title}
    </Title>
    <Body size="small" css={{ marginTop: 8, color: colors.onSurface }}>
      {summary}
      <span
        css={{
          display: 'inline',
          color: colors.onSurfaceMedium
        }}
      >
        {' '}
        – {published}
      </span>
    </Body>
  </>
)

export default WorkDetails

import { colors, typography } from '../utils/theme'
import Container from './container'
import Spacer from './spacer'
import Text from './text'
import Image from 'next/image'
import { formatDate } from '../utils/date'

const PostHeader = ({ title, subtitle, image, date }) => (
  <div css={{ padding: '64px 0' }}>
    <Container
      css={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <Text textStyle={typography.h2} renderAs='h2'>
        {title}
      </Text>
      <Spacer height={12} />
      <Text textStyle={typography.body1}>{subtitle}</Text>
      <Spacer height={12} />
      <Text textStyle={typography.body1} css={{ color: colors.onSurface[1] }}>
        Published on {formatDate(date)}
      </Text>
    </Container>
  </div>
)

export default PostHeader

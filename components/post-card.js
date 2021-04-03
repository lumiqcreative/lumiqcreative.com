import Link from 'next/link'
import Image from 'next/image'
import { colors, typography } from '../utils/theme'
import Spacer from './spacer'
import Text from './text'
import { formatDate } from '../utils/date'

const PostCard = ({ post }) => (
  <Link href={`/posts/${post.slug}`} passHref>
    <a
      css={{
        display: 'block',
        textDecoration: 'none',
        '&:hover': {
          '& > .title': {
            textDecoration: 'underline',
            textDecorationThickness: 1
          }
        }
      }}
    >
      <Image
        src={post.image}
        layout='responsive'
        width={16}
        height={9}
        alt={post.title}
        css={{ background: colors.surface[1] }}
      />
      <Spacer height={24} />
      <Text
        textStyle={typography.subtitle}
        css={{ color: colors.onSurface[0] }}
        className='title'
      >
        {post.title}
      </Text>
      <Spacer height={12} />
      <Text textStyle={typography.body1} css={{ color: colors.onSurface[0] }}>
        {post.subtitle}
      </Text>
      <Spacer height={12} />
      <Text textStyle={typography.body1} css={{ color: colors.onSurface[1] }}>
        {formatDate(post.date)}
      </Text>
    </a>
  </Link>
)

export default PostCard

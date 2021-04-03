import Image from 'next/image'
import { colors } from '../utils/theme'

const PostImage = ({ src, alt }) => (
  <>
    <div css={{ '&:not(:first-child)': { height: 24 } }} />
    <Image
      width={16}
      height={9}
      src={src}
      alt={alt}
      layout='responsive'
      css={{ background: colors.surface[1] }}
    />
  </>
)

export default PostImage

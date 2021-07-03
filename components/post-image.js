import Image from 'next/image'
import { colors } from '../utils/theme'
import Spacer from './spacer'

const PostImage = ({ src, alt, cover }) => (
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
    {cover && <Spacer height={64} />}
  </>
)

export default PostImage

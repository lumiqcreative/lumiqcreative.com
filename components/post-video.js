import { colors } from '../utils/theme'
import Spacer from './spacer'

const PostVideo = ({ src, cover }) => (
  <>
    <div css={{ '&:not(:first-child)': { height: 24 } }} />
    <video autoPlay loop css={{ background: colors.surface[1], width: '100%' }}>
      <source src={src} type='video/mp4' />
    </video>
    {cover && <Spacer height={64} />}
  </>
)

export default PostVideo

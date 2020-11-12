import { DeviceFrameType } from 'types'
import Container from 'components/container'
import formatDate from 'utils/format-date'
import getDeviceFrames from 'utils/get-device-frames'
import IconButton from 'components/icon-button'
import Layout from 'components/layout'
import ListRow from 'components/list-row'
import writeToClipboard from 'utils/write-to-clipboard'
import getRemoteFileUrl from 'utils/get-remote-file-url'

type Props = {
  deviceFrames: DeviceFrameType[]
}

const DeviceFrames = ({ deviceFrames }: Props): JSX.Element => (
  <Layout
    title='Device Frames'
    heroTitle='Device Frames'
    heroSubtitle='Inch-perfect device frames ready for customisation.'
    description='Inch-perfect device frames ready for customisation.'
    cover={getRemoteFileUrl('frames-social.png')}
    heroDetail={
      <>
        Version 1.0 –{' '}
        <a href='https://github.com/lumiqcreative/device-frames/blob/master/LICENSE'>
          View License
        </a>
      </>
    }
  >
    <Container>
      {deviceFrames.map(deviceFrame => (
        <ListRow
          key={deviceFrame.deviceName}
          title={deviceFrame.deviceName}
          subtitle={formatDate(deviceFrame.datePublished)}
          detail={
            <div
              css={{
                display: 'grid',
                gridAutoFlow: 'column'
              }}
            >
              <IconButton
                as='button'
                onClick={() => writeToClipboard(deviceFrame.pathData)}
                iconName='copy'
              />
              <IconButton as='a' href={deviceFrame.href} iconName='get' />
            </div>
          }
        />
      ))}
    </Container>
  </Layout>
)

const getStaticProps = () => {
  const deviceFrames = getDeviceFrames()
  return {
    props: {
      deviceFrames
    }
  }
}

export { getStaticProps }
export default DeviceFrames

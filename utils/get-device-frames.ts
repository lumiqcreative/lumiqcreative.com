import deviceFrames from 'content/device-frames'
import { DeviceFrameType } from 'types'

const getDeviceFrames = (): DeviceFrameType[] => {
  return deviceFrames
    .sort((a, b) => a.deviceName.localeCompare(b.deviceName))
    .sort((a, b) => (a.datePublished > b.datePublished ? -1 : 1))
}

export default getDeviceFrames

import WorkType from 'types/work-type'
import getRemoteFileUrl from 'utils/get-remote-file-url'

const works: WorkType[] = [
  {
    title: 'Device Frames',
    category: 'Resources',
    summary: 'Inch-perfect device frames ready for customisation.',
    published: '2020-10-14',
    destination: 'external',
    cover: getRemoteFileUrl('frames.png'),
    link: 'https://github.com/lumiqcreative/device-frames'
  },
  {
    title: 'Overdrop Blocks',
    category: 'Deliverables',
    summary:
      'UX writing and interface co-design for the cross-platform mobile weather app.',
    published: '2020-08-22',
    figures: [
      {
        image: getRemoteFileUrl('overdrop-places.png'),
        caption: 'Place manager.'
      },
      {
        image: getRemoteFileUrl('overdrop-warnings.png'),
        caption: 'Weather warnings.'
      },
      {
        image: getRemoteFileUrl('overdrop-radar.png'),
        caption: 'Radar scale & controls.'
      }
    ],
    destination: 'internal',
    slug: 'overdrop-blocks',
    cover: getRemoteFileUrl('overdrop-blocks.png'),
    socialImage: getRemoteFileUrl('overdrop-blocks-social.png')
  },
  {
    title: 'Lawnfeed Page',
    category: 'Deliverables',
    summary:
      'Download page for the add-in that integrates Google Feed into Lawnchair.',
    published: '2020-07-30',
    link: 'https://lawnchair.app/lawnfeed',
    destination: 'external',
    cover: getRemoteFileUrl('lawnfeed-page.png')
  },
  {
    title: 'Frames Docs',
    category: 'Deliverables',
    summary:
      'Setup & maintenance documentation for the Android wallpaper app library.',
    published: '2020-07-15',
    link: 'https://github.com/jahirfiquitiva/Frames/wiki',
    destination: 'external',
    cover: getRemoteFileUrl('frames-docs.png')
  }
]

export default works

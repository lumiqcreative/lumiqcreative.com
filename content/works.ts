import { WorkType } from 'types'
import getRemoteFileUrl from 'tools/get-remote-file-url'

const works: WorkType[] = [
  {
    category: 'Resources',
    cover: getRemoteFileUrl('frames.png'),
    socialCover: getRemoteFileUrl('frames-social.png'),
    datePublished: '2020-10-14',
    href: 'https://github.com/lumiqcreative/device-frames',
    summary: 'Inch-perfect device frames ready for customisation.',
    title: 'Device Frames',
    where: 'remote'
  },
  {
    category: 'Deliverables',
    cover: getRemoteFileUrl('overdrop-blocks.png'),
    socialCover: getRemoteFileUrl('overdrop-blocks-social.png'),
    datePublished: '2020-08-22',
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
    pageKind: 'auto-gallery',
    slug: 'overdrop-blocks',
    summary:
      'UX writing and interface co-design for the cross-platform mobile weather app.',
    title: 'Overdrop Blocks',
    where: 'local'
  },
  {
    category: 'Deliverables',
    cover: getRemoteFileUrl('lawnfeed-page.png'),
    socialCover: getRemoteFileUrl('lawnfeed-page-social.png'),
    datePublished: '2020-07-30',
    href: 'https://lawnchair.app/lawnfeed',
    summary:
      'Download page for the add-in that integrates Google Feed into Lawnchair.',
    title: 'Lawnfeed Page',
    where: 'remote'
  },
  {
    category: 'Deliverables',
    cover: getRemoteFileUrl('frames-docs.png'),
    socialCover: getRemoteFileUrl('frames-docs-social.png'),
    datePublished: '2020-07-15',
    href: 'https://github.com/jahirfiquitiva/Frames/wiki',
    summary:
      'Setup & maintenance documentation for the Android wallpaper app library.',
    title: 'Frames Docs',
    where: 'remote'
  }
]

export default works

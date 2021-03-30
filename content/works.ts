import { WorkType } from 'types'

const works: WorkType[] = [
  {
    category: 'Resources',
    cover: '/images/frames.png',
    socialCover: 'images/frames-social.png',
    datePublished: '2020-10-14',
    slug: 'device-frames',
    summary: 'Inch-perfect device frames ready for customisation.',
    title: 'Device Frames',
    where: 'local',
    pageKind: 'prebuilt'
  },
  {
    category: 'Deliverables',
    cover: '/images/overdrop-blocks.png',
    socialCover: 'images/overdrop-blocks-social.png',
    datePublished: '2020-08-22',
    figures: [
      {
        image: '/images/overdrop-places.png',
        caption: 'Place manager.'
      },
      {
        image: '/images/overdrop-warnings.png',
        caption: 'Weather warnings.'
      },
      {
        image: '/images/overdrop-radar.png',
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
    cover: '/images/lawnfeed-page.png',
    socialCover: '/images/lawnfeed-page-social.png',
    datePublished: '2020-07-30',
    href: 'https://lawnchair.app/lawnfeed',
    summary:
      'Download page for the add-in that integrates Google Feed into Lawnchair.',
    title: 'Lawnfeed Page',
    where: 'remote'
  },
  {
    category: 'Deliverables',
    cover: '/images/frames-docs.png',
    socialCover: '/images/frames-docs-social.png',
    datePublished: '2020-07-15',
    href: 'https://github.com/jahirfiquitiva/Frames/wiki',
    summary:
      'Setup & maintenance documentation for the Android wallpaper app library.',
    title: 'Frames Docs',
    where: 'remote'
  }
]

export default works

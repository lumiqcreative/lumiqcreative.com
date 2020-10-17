import WorkType from 'types/work-type'

const works: WorkType[] = [
  {
    title: 'Device Frames',
    category: 'Resources',
    summary: 'Inch-perfect device frames ready for customisation.',
    published: '2020-10-14',
    destination: 'external',
    cover: 'https://content.lumiqcreative.com/img/frames.png',
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
        image: 'https://content.lumiqcreative.com/img/overdrop-places.png',
        caption: 'Place manager.'
      },
      {
        image: 'https://content.lumiqcreative.com/img/overdrop-warnings.png',
        caption: 'Weather warnings.'
      },
      {
        image: 'https://content.lumiqcreative.com/img/overdrop-radar.png',
        caption: 'Radar scale & controls.'
      }
    ],
    destination: 'internal',
    slug: 'overdrop-blocks',
    cover: 'https://content.lumiqcreative.com/img/overdrop-blocks.png',
    socialImage:
      'https://content.lumiqcreative.com/img/overdrop-blocks-social.png'
  },
  {
    title: 'Lawnfeed Page',
    category: 'Deliverables',
    summary:
      'Download page for the add-in that integrates Google Feed into Lawnchair.',
    published: '2020-07-30',
    link: 'https://lawnchair.app/lawnfeed',
    destination: 'external',
    cover: 'https://content.lumiqcreative.com/img/lawnfeed-page.png'
  },
  {
    title: 'Frames Docs',
    category: 'Deliverables',
    summary:
      'Setup & maintenance documentation for the Android wallpaper app library.',
    published: '2020-07-15',
    link: 'https://github.com/jahirfiquitiva/Frames/wiki',
    destination: 'external',
    cover:
      'https://storage.googleapis.com/content.lumiqcreative.com/img/frames-docs.png'
  }
]

export default works

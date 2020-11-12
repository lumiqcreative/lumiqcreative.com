type GalleryFigureType = {
  image: string
  caption: string
}

type WorkType = {
  title: string
  summary: string
  cover: string
  socialCover: string
  datePublished: string
  category: 'Deliverables' | 'Resources'
} & (
  | ({ where: 'local' } & (
      | { pageKind: 'auto-gallery'; figures: GalleryFigureType[]; slug: string }
      | { pageKind: 'prebuilt'; slug: string }
    ))
  | { where: 'remote'; href: string }
)

type DeviceFrameType = {
  datePublished: string
  deviceName: string
  href: string
  pathData: string
}

export type { WorkType, GalleryFigureType, DeviceFrameType }

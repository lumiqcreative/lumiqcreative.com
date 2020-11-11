import { WorkType } from 'types'
import works from 'content/works'

const getWorks = (): WorkType[] => {
  return works.sort((a, b) => (a.datePublished > b.datePublished ? -1 : 1))
}

const getAutoGallerySlugs = (): string[] => {
  const autoGallerySlugs: string[] = []
  works.map(work => {
    if (work.where === 'local' && work.pageKind === 'auto-gallery') {
      autoGallerySlugs.push(work.slug)
    }
  })
  return autoGallerySlugs
}

const getAutoGalleryWork = (slug: string): WorkType | {} => {
  return (
    works.find(
      work =>
        work.where === 'local' &&
        work.pageKind === 'auto-gallery' &&
        work.slug === slug
    ) || {}
  )
}

export { getWorks, getAutoGallerySlugs, getAutoGalleryWork }

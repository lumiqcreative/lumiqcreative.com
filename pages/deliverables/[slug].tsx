import { getAutoGallerySlugs, getAutoGalleryWork } from 'utils/works'
import { WorkType } from 'types'
import formatDate from 'utils/format-date'
import Gallery from 'components/gallery'
import Layout from 'components/layout'

type Props = {
  work: WorkType
}

const Work = ({ work }: Props) => (
  <Layout
    title={work.title}
    heroTitle={work.title}
    heroSubtitle={work.summary}
    heroDetail={formatDate(work.datePublished)}
    cover={work.socialCover}
  >
    <Gallery
      figures={
        (work.where === 'local' &&
          work.pageKind === 'auto-gallery' &&
          work.figures) ||
        []
      }
    />
  </Layout>
)

const getStaticPaths = () => {
  const slugs = getAutoGallerySlugs()
  return {
    paths: slugs.map(slug => {
      return {
        params: {
          slug: slug
        }
      }
    }),
    fallback: false
  }
}

type Params = {
  params: {
    slug: string
  }
}

const getStaticProps = ({ params }: Params) => ({
  props: {
    work: getAutoGalleryWork(params.slug)
  }
})

export { getStaticPaths, getStaticProps }
export default Work

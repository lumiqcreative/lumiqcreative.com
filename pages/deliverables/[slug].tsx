import { WorkType } from 'types'
import Layout from 'components/layout'
import Gallery from 'components/gallery'
import { getAutoGallerySlugs, getAutoGalleryWork } from 'tools/works'
import formatDate from 'tools/format-date'

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

const getStaticPaths = async () => {
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

const getStaticProps = async ({ params }: Params) => {
  const work = getAutoGalleryWork(params.slug)
  return {
    props: {
      work: work
    }
  }
}

export { getStaticPaths, getStaticProps }
export default Work

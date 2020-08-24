import { GetStaticProps, GetStaticPaths } from 'next'
import Gallery from 'components/gallery'
import getWorkData from 'utils/get-work-data'
import getWorkSlugs from 'utils/get-work-slugs'
import Page from 'components/page'
import FigureType from 'types/figure-type'
import formatDate from 'utils/format-date'

type Props = {
  figures: FigureType[]
  summary: string
  title: string
  published: string
}

const Work = ({ figures, summary, title, published }: Props): JSX.Element => {
  return (
    <Page
      titlePrefix={title}
      heroTitle={title}
      heroSubtitle={summary}
      heroMeta={formatDate(published)}
    >
      <Gallery figures={figures || []}></Gallery>
    </Page>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const workSlugs = getWorkSlugs()
  return {
    paths: workSlugs,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const workData = await getWorkData(params ? (params.slug as string) : '')
  return {
    props: {
      figures: workData.figures,
      summary: workData.summary,
      published: workData.published,
      title: workData.title
    }
  }
}

export default Work

import { GetStaticProps, GetStaticPaths } from 'next'
import Gallery from 'components/gallery'
import getWorkData from 'utils/get-work-data'
import getWorkSlugs from 'utils/get-work-slugs'
import Page from 'components/page'
import FigureType from 'types/figure-type'

type Props = {
  figures: FigureType[]
  fields: string
  title: string
}

const Work = ({ figures, fields, title }: Props): JSX.Element => {
  return (
    <Page titlePrefix={title} heroTitle={title} heroSubtitle={fields}>
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
      fields: workData.fields,
      title: workData.title
    }
  }
}

export default Work

import WorkType from 'types/work-type'
import works from 'data/works'

const getWorkData = (slug: string): WorkType | Record<string, unknown> => {
  const workData = works.find((work) => work.slug === slug)
  return workData || {}
}

export default getWorkData

import WorkType from 'types/work-type'
import works from 'data/works'

const getAllWorks = (): WorkType[] => {
  const allWorks: WorkType[] = works.sort((work1, work2) =>
    new Date(work1.published) > new Date(work2.published) ? -1 : 1
  )
  return allWorks
}

export default getAllWorks

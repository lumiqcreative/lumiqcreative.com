import { compareDesc, parseISO } from 'date-fns'
import WorkType from 'types/work-type'
import works from 'data/works'

const getAllWorks = (): WorkType[] => {
  const allWorks: WorkType[] = works.sort((work1, work2) =>
    compareDesc(parseISO(work1.published), parseISO(work2.published))
  )
  return allWorks
}

export default getAllWorks

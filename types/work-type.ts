import FigureType from './figure-type'

type WorkType = {
  category: 'Stories' | 'Deliverables' | 'Resources'
  destination: 'internal' | 'external'
  figures?: FigureType[]
  link?: string
  published: string
  slug?: string
  summary: string
  title: string
}

export default WorkType

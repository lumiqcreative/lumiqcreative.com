import WorkCell from './work-cell'
import WorkType from 'types/work-type'
import formatDate from 'utils/format-date'
import Grid from 'components/grid'

type Props = {
  works: WorkType[]
  filterText: string
}

const WorkGrid = ({ works, filterText }: Props): JSX.Element => {
  const cells: React.ReactNode[] | null = []
  works.forEach((work) => {
    if (work.category === filterText || filterText === '') {
      cells.push(
        <WorkCell
          cover={work.cover}
          location={work.destination}
          slug={work.slug || undefined}
          link={work.link}
          key={work.title}
          published={formatDate(work.published)}
          summary={work.summary}
          title={work.title}
        />
      )
    }
  })
  return (
    <Grid rowGap="lg" css={{ marginTop: 24 }}>
      {cells}
    </Grid>
  )
}

export default WorkGrid

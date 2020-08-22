import WorkRow from '../work-row'
import WorkType from 'types/work-type'
import formatDate from 'utils/format-date'

type Props = {
  works: WorkType[]
  filterText: string
}

const WorkTable = ({ works, filterText }: Props): JSX.Element => {
  const rows: React.ReactNode[] | null = []
  works.forEach((work) => {
    if (work.category === filterText || filterText === '') {
      rows.push(
        <WorkRow
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
  return <div css={{ marginTop: 24 }}>{rows}</div>
}

export default WorkTable

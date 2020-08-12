import WorkRow from '../work-row'
import Work from 'types'
import DateFormatter from 'utils/date-formatter'
import { parseISO, compareDesc } from 'date-fns'

type Props = {
  works: Work[]
  filterText: string
}

const WorkTable = ({ works, filterText }: Props): JSX.Element => {
  const rows: React.ReactNode[] | null = []
  works.sort((a, b) => compareDesc(parseISO(a.published), parseISO(b.published)))
  works.forEach((work) => {
    if (work.category === filterText || filterText === '') {
      rows.push(
        <WorkRow
          href={work.link}
          key={work.title}
          meta={DateFormatter(work.published)}
          subtitle={work.summary}
          title={work.title}
        />
      )
    }
  })
  return <div css={{ marginTop: 24 }}>{rows}</div>
}

export default WorkTable

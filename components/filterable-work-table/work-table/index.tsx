import WorkRow from '../work-row'
import Work from 'types'

type Props = {
  works: Work[]
  filterText: string
}

const WorkTable = ({ works, filterText }: Props) => {
  const rows: React.ReactNode[] | null = []
  works.forEach((work) => {
    if (work.category === filterText || filterText === '') {
      rows.push(
        <WorkRow
          href={work.link}
          key={work.title}
          meta={work.published}
          subtitle={work.summary}
          title={work.title}
        />
      )
    }
  })
  return <div css={{ marginTop: 24 }}>{rows}</div>
}

export default WorkTable

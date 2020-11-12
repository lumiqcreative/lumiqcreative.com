import { WorkType } from 'types'
import WorkCell from 'components/work-cell'
import Link from 'next/link'
import { ReactNode } from 'react'
import { media } from 'theme'

type Props = {
  filterText: string
  works: WorkType[]
}

const WorkGrid = ({ filterText, works }: Props): JSX.Element => {
  const cells: ReactNode[] = []

  works.map(work => {
    if (work.category === filterText || !filterText) {
      if (work.where === 'local') {
        cells.push(
          <Link
            href={`${work.category.toLowerCase()}/${work.slug}`}
            key={work.title}
            passHref
          >
            <WorkCell
              cover={work.cover}
              datePublished={work.datePublished}
              summary={work.summary}
              title={work.title}
            />
          </Link>
        )
      } else {
        cells.push(
          <WorkCell
            cover={work.cover}
            datePublished={work.datePublished}
            href={work.href}
            key={work.title}
            summary={work.summary}
            title={work.title}
          />
        )
      }
    }
  })

  return (
    <div
      css={{
        display: 'grid',
        gridColumnGap: 24,
        gridRowGap: 48,
        gridTemplateColumns: 'repeat(4, 1fr)',
        paddingTop: 20,
        [media[0]]: { gridTemplateColumns: 'repeat(8, 1fr)' },
        [media[1]]: { gridTemplateColumns: 'repeat(12, 1fr)' }
      }}
    >
      {cells}
    </div>
  )
}

export default WorkGrid

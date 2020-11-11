import { media } from 'theme'
import { MouseEvent } from 'react'
import { WorkType } from 'types'
import Tag from './tag'

type Props = {
  filterText: string
  onFilterTextChange: (e: MouseEvent<HTMLElement>) => void
  works: WorkType[]
}

const FilterGroup = ({ filterText, onFilterTextChange, works }: Props) => {
  const tags = [
    <Tag
      active={filterText === ''}
      data=''
      key='All Works'
      onClick={onFilterTextChange}
    >
      All Works
    </Tag>
  ]
  const categories = [...new Set(works.map(work => work.category))]

  categories.map(category => {
    tags.push(
      <Tag
        active={filterText === category}
        data={category}
        key={category}
        onClick={onFilterTextChange}
      >
        {category}
      </Tag>
    )
  })

  return (
    <div
      css={{
        display: 'grid',
        gridColumnGap: 24,
        [media[0]]: { display: 'inline-grid', gridAutoFlow: 'column' }
      }}
    >
      {tags}
    </div>
  )
}

export default FilterGroup

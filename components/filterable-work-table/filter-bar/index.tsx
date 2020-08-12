import Chip from 'components/chip'
import { media } from 'theme'
import Work from 'types'

type Props = {
  filterText: string
  onFilterTextChange: (e: React.MouseEvent<HTMLElement>) => void
  works: Work[]
}

const FilterBar = ({ filterText, onFilterTextChange, works }: Props) => {
  const items = [
    <Chip
      active={filterText === ''}
      key="All Work"
      onClick={onFilterTextChange}
    >
      All Work
    </Chip>
  ];
  [...new Set(works.map((work) => work.category))].forEach((category) => {
    items.push(
      <Chip
        active={filterText === category}
        value={category}
        key={category}
        onClick={onFilterTextChange}
      >
        {category}
      </Chip>
    )
  })
  return (
    <div
      css={{
        display: 'grid',
        gridColumnGap: 24,
        gridRowGap: 8,
        flexDirection: 'column',
        [media[0]]: { display: 'inline-grid', gridAutoFlow: 'column' }
      }}
    >
      {items}
    </div>
  )
}

export default FilterBar

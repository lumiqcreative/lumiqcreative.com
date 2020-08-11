import { useState } from 'react'
import FilterBar from './filter-bar'
import Container from 'components/container'
import works from 'data/works'
import WorkTable from './work-table'

const FilterableWorkTable = () => {
  const [filterText, updateFilterText] = useState<string>('')
  const handleFilterTextChange = (e: React.MouseEvent<HTMLElement>) => {
    updateFilterText((e.target as HTMLElement).getAttribute('data-value') || '')
  }
  return (
    <Container>
      <FilterBar
        filterText={filterText}
        onFilterTextChange={handleFilterTextChange}
        works={works}
      />
      <WorkTable filterText={filterText} works={works} />
    </Container>
  )
}

export default FilterableWorkTable

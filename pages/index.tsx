import { getWorks } from 'tools/works'
import { useState, MouseEvent } from 'react'
import { WorkType } from 'types'
import Container from 'components/container'
import FilterGroup from 'components/filter-group'
import Layout from 'components/layout'
import WorkGrid from 'components/work-grid'

type Props = {
  works: WorkType[]
}

const Home = ({ works }: Props): JSX.Element => {
  const [filterText, updateFilterText] = useState('')
  const handleFilterTextChange = (e: MouseEvent<HTMLElement>) => {
    updateFilterText((e.target as HTMLElement).getAttribute('data-text') || '')
  }

  return (
    <Layout heroTitle='I ar&shy;range shapes, com&shy;mand com&shy;pu&shy;ters, and put to&shy;ge&shy;ther words.'>
      <Container>
        <FilterGroup
          filterText={filterText}
          onFilterTextChange={handleFilterTextChange}
          works={works}
        />
        <WorkGrid filterText={filterText} works={works} />
      </Container>
    </Layout>
  )
}

const getStaticProps = async () => {
  const works = getWorks()
  return {
    props: {
      works
    }
  }
}

export { getStaticProps }
export default Home

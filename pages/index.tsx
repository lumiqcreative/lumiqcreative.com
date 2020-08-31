import FilterableWorkGrid from 'components/filterable-work-grid'
import Page from 'components/page'

const Home = (): JSX.Element => {
  return (
    <Page
      heroTitle="I ar&shy;range shapes, com&shy;mand com&shy;pu&shy;ters, and put
    to&shy;ge&shy;ther words."
    >
      <FilterableWorkGrid />
    </Page>
  )
}

export default Home

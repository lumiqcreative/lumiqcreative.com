import FilterableWorkTable from 'components/filterable-work-table'
import Page from 'components/page'

const Home = (): JSX.Element => {
  return (
    <Page heroTitle='I ar&shy;range shapes, com&shy;mand com&shy;pu&shy;ters, and put
    to&shy;ge&shy;ther words.' description='I arrange shapes, command computers, and put together words.' coverImage='https://content.lumiqcreative.com/img/cover.png'>
      <FilterableWorkTable />
    </Page>
  )
}

export default Home

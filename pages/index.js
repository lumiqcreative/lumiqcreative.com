import Layout from '../components/layout'
import Hero from '../components/hero'
import PostGrid from '../components/post-grid'
import PostCard from '../components/post-card'
import { getPosts } from '../utils/get-posts'

const Home = ({ posts }) => (
  <Layout>
    <Hero />
    <PostGrid>
      {posts.map(post => {
        return <PostCard key={post.slug} post={post} />
      })}
    </PostGrid>
  </Layout>
)

const getStaticProps = async () => ({
  props: {
    posts: getPosts()
  }
})

export default Home
export { getStaticProps }

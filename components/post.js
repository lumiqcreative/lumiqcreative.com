import PostHeader from './post-header'
import Layout from './layout'

const Post = ({ meta, children }) => (
  <Layout
    title={meta.title}
    description={meta.subtitle}
    image={`https://patrykmichalik.com${meta.image}`}
  >
    <PostHeader
      title={meta.title}
      subtitle={meta.subtitle}
      date={meta.date}
      image={meta.image}
    />
    {children}
  </Layout>
)

export default Post

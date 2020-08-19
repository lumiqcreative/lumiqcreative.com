import Head from 'next/head'
import Header from './header'
import Hero from 'components/hero'
import Footer from './footer'

type Props = {
  children: React.ReactNode
  coverImage: string
  description: string
  heroTitle: string
  titlePrefix?: string
}

const Page = ({ children, coverImage, description, heroTitle, titlePrefix }: Props): JSX.Element => {
  const title = titlePrefix ? `${titlePrefix} – Lumiq Creative` : 'Lumiq Creative'
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="https://raw.githubusercontent.com/lumiqcreative/brand/master/q-mark/q-mark-black.png" />
        <meta
          name="description"
          content={description}
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:image"
          content={coverImage}
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description}
        />
      </Head>
      <Header/>
      <Hero title={heroTitle}/>
      {children}
      <Footer/>
    </>
  )
}

export default Page
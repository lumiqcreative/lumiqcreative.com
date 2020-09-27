import Head from 'next/head'
import Header from './header'
import Hero from './hero'
import Footer from './footer'

type Props = {
  children: React.ReactNode
  socialImage?: string
  description?: string
  heroTitle: string
  titlePrefix?: string
  heroSubtitle?: string
  heroMeta?: string
  largeSocialImage?: boolean
}

const Page = ({
  children,
  socialImage,
  description,
  heroTitle,
  titlePrefix,
  heroSubtitle,
  heroMeta,
  largeSocialImage
}: Props): JSX.Element => {
  const title = titlePrefix
    ? `${titlePrefix} – Lumiq Creative`
    : 'Lumiq Creative'
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/lumiqcreative/brand/master/q-mark/q-mark-black.png"
        />
        <meta name="description" content={description} />
        <meta
          name="twitter:card"
          content={largeSocialImage ? 'summary_large_image' : 'summary'}
        />
        <meta
          property="og:image"
          content={
            socialImage || 'https://content.lumiqcreative.com/img/cover.png'
          }
        />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={
            description ||
            'I arrange shapes, command computers, and put together words.'
          }
        />
      </Head>
      <Header />
      <Hero title={heroTitle} subtitle={heroSubtitle} meta={heroMeta} />
      {children}
      <Footer />
    </>
  )
}

export default Page

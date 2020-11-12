import { ReactNode } from 'react'
import Footer from 'components/footer'
import Head from 'next/head'
import Header from 'components/header'
import Hero from 'components/hero'

type Props = {
  blank?: boolean
  children: ReactNode
  description?: string
  title?: string
  heroSubtitle?: string
  heroDetail?: ReactNode
  cover?: string
} & (
  | {
      blank: true
      heroTitle?: string
    }
  | { blank?: false; heroTitle: string }
)

const Layout = ({
  blank = false,
  children,
  description = 'I arrage shapes, command computers, and put together words.',
  heroDetail,
  heroSubtitle = '',
  heroTitle = '',
  title = '',
  cover = ''
}: Props): JSX.Element => (
  <>
    <Head>
      <title>{title ? `${title} – Lumiq Creative` : 'Lumiq Creative'}</title>
      <link
        rel='icon'
        href='https://raw.githubusercontent.com/lumiqcreative/brand/master/q-mark/q-mark-black.png'
      />
      <meta
        name='description'
        content={
          description ||
          'I arrage shapes, command computers, and put together words.'
        }
      />
      <meta
        property='og:title'
        content={title ? `${title} – Lumiq Creative` : 'Lumiq Creative'}
      />
      <meta
        name='twitter:card'
        content={cover ? 'summary_large_image' : 'summary'}
      />
      <meta
        property='og:description'
        content={
          description ||
          'I arrange shapes, command computers, and put together words.'
        }
      />
      <meta
        property='og:image'
        content={cover || 'https://content.lumiqcreative.com/img/cover.png'}
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'
        rel='stylesheet'
      />
    </Head>
    {!blank && (
      <>
        <Header />
        <Hero detail={heroDetail} title={heroTitle} subtitle={heroSubtitle} />
      </>
    )}
    {children}
    {!blank && <Footer />}
  </>
)

export default Layout

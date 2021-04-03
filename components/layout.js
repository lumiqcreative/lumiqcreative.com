import { createGlobalStyle } from 'styled-components'
import Header from './header'
import Head from 'next/head'
import Footer from './footer'

const GlobalStyle = createGlobalStyle({
  body: { margin: 0 },
  '*': { boxSizing: 'border-box' }
})

const Layout = ({ children, title, description, image }) => (
  <div css={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <GlobalStyle />
    <Head>
      <title>{title ? `${title} – Patryk Michalik` : 'Patryk Michalik'}</title>
      <meta
        name='og:title'
        content={title ? `${title} – Patryk Michalik` : 'Patryk Michalik'}
      />
      <meta
        name='description'
        content={
          description ||
          'I arrage shapes, command computers, and put together words.'
        }
      />
      <link rel='icon' href='/favicon.png' />
      <meta
        name='og:description'
        content={
          description ||
          'I arrage shapes, command computers, and put together words.'
        }
      />
      <meta
        name='twitter:card'
        content={image ? 'summary_large_image' : 'summary'}
      />
      <meta property='og:image' content={image || '/cover.png'} />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-%E2%80%93%E2%80%98%E2%80%99%E2%80%9C%E2%80%9D%C2%A9'
        rel='stylesheet'
      />
    </Head>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout

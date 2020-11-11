import { AppProps } from 'next/app'
import { colors } from 'theme'
import { Global, css } from '@emotion/core'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Global
      styles={css({
        '@font-face': {
          fontFamily: '"Graphik"',
          fontStyle: 'normal',
          fontWeight: 600,
          src: `url('${process.env.NEXT_PUBLIC_GRAPHIK_600_URL}')`
        },
        body: {
          margin: 0,
          background: colors.surface.primary,
          textRendering: 'optimizeLegibility'
        },
        '*': {
          boxSizing: 'border-box'
        }
      })}
    />
    <Component {...pageProps} />
  </>
)

export default App

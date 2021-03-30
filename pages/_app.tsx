import { AppProps } from 'next/app'
import { colors } from 'theme'
import { Global, css } from '@emotion/react'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Global
      styles={css({
        body: {
          background: colors.surface[0],
          margin: 0,
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

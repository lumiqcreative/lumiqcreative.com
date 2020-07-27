import { Global, css } from "@emotion/core";
import { colors } from "theme";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Global
        styles={css(
          {
            "@font-face": {
              fontFamily: "'Graphik'",
              fontStyle: "normal",
              fontWeight: 600,
              src: "url('/fonts/graphik-600.woff2')",
            },
          },
          {
            "@font-face": {
              fontFamily: "'Inter'",
              fontStyle: "normal",
              fontWeight: 400,
              src: "url('/fonts/inter-400.woff2')",
            },
          },
          {
            "@font-face": {
              fontFamily: "'Inter'",
              fontStyle: "normal",
              fontWeight: 500,
              src: "url('/fonts/inter-500.woff2')",
            },
          },
          {
            "@font-face": {
              fontFamily: "'Inter'",
              fontStyle: "normal",
              fontWeight: 600,
              src: "url('/fonts/inter-600.woff2')",
            },
          },
          {
            body: {
              margin: 0,
              background: colors.surface,
              textRendering: "optimizeLegibility",
            },
            "*": {
              boxSizing: "border-box",
            },
          }
        )}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;

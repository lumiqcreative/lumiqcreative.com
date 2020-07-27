import Container from "components/container";
import Button from "components/button";
import WordMark from "./word-mark";
import { colors } from "theme";

const Header = () => {
  return (
    <header
      css={{
        backgroundColor: colors.surface,
        position: "fixed",
        zIndex: 1,
        width: "100%",
      }}
    >
      <Container>
        <div
          css={{
            display: "flex",
            height: 64,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <WordMark />
          <Button
            css={{ margin: "auto 0 auto auto" }}
            href="mailto:contact@lumiqcreative.com"
          >
            Get in Touch
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;

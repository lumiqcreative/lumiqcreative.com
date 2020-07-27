import Body from "components/body";
import Container from "components/container";
import { colors } from "theme";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div
          css={{
            paddingTop: 56,
            boxSizing: "content-box",
            height: 64,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Body css={{ color: colors.onSurface, margin: "auto 0" }}>
            &copy; 2018–{new Date().getFullYear()} Lumiq Creative
          </Body>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import Title from "components/title";
import Body from "components/body";
import { colors } from "theme";

const WorkRow = (props) => {
  return (
    <a
      href={props.href}
      css={{
        display: "block",
        textDecoration: "none",
        padding: "24px 0",
        borderTop: `1px solid ${colors.border}`,
        "&:last-child": { borderBottom: `1px solid ${colors.border}` },
      }}
    >
      <Title as="h3" variant={3} css={{ color: colors.onSurface }}>
        {props.title}
      </Title>
      <Body css={{ marginTop: 8, color: colors.onSurface }}>
        {props.subtitle}
        <span
          css={{
            display: "inline",
            color: colors.onSurfaceMedium,
          }}
        >
          {" "}
          – {props.meta}
        </span>
      </Body>
    </a>
  );
};

export default WorkRow;

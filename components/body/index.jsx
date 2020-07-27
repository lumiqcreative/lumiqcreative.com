const Body = (props) => {
  return (
    <p
      className={props.className}
      css={{
        fontFamily: "Inter",
        fontWeight: 400,
        margin: 0,
        fontSize: 15,
        lineHeight: "20px",
      }}
    >
      {props.children}
    </p>
  );
};

export default Body;

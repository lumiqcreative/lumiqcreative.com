import Button from "./button";
import Holder from "./holder";
import styles from "./header.module.sass";

class HeaderRoot extends React.Component {
  render() {
    return <Holder className={styles.root}>{this.props.children}</Holder>;
  }
}

class HeaderInner extends React.Component {
  render() {
    return <div className={styles.inner}>{this.props.children}</div>;
  }
}

class HeaderLogo extends React.Component {
  render() {
    return (
      <svg
        className={styles.logo}
        viewBox="0 0 3282 1100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2973 909.872C3147.93 883.359 3282 732.336 3282 550C3282 348.968 3119.03 186 2918 186C2716.97 186 2554 348.968 2554 550C2554 732.336 2688.07 883.359 2863 909.872V934C2863 1040 2923 1100 3029 1100H3152V1010H3049C2983 1010 2973 1000 2973 934V909.872ZM2918 814C3058.28 814 3172 695.803 3172 550C3172 404.197 3058.28 286 2918 286C2777.72 286 2664 404.197 2664 550C2664 695.803 2777.72 814 2918 814ZM2026 310V200H2225H2335L2534 200V310H2335V790H2534V900H2335H2225H2026V790H2225V310H2026ZM1346 200L1581.93 769.492L1826 200H1936V900H1826V456.667L1636 900H1526L1346 465.517V900H1236V200H1346ZM4.80825e-06 200H110V790H508V900H110H4.80825e-06L0 790L4.80825e-06 200ZM638 200H528V605C528 775.656 646.344 914 837 914C1027.66 914 1146 775.656 1146 605V200H1036V615C1036 724.905 966.906 814 837 814C707.094 814 638 724.905 638 615V200Z"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="3282" height="1100" />
          </clipPath>
        </defs>
      </svg>
    );
  }
}

class HeaderButton extends React.Component {
  render() {
    return (
      <Button className={styles.button} href="mailto:contact@lumiqcreative.com">
        Get in Touch
      </Button>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <HeaderRoot>
        <HeaderInner>
          <HeaderLogo />
          <HeaderButton />
        </HeaderInner>
      </HeaderRoot>
    );
  }
}

export default Header;

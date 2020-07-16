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
    return <img className={styles.logo} src="/word-mark.svg" />;
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

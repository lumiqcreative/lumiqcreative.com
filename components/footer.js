import Copy from "./copy";
import Holder from "./holder";
import styles from "./footer.module.sass";

class FooterInner extends React.Component {
  render() {
    return <div className={styles.inner}>{this.props.children}</div>;
  }
}

class FooterCopy extends React.Component {
  render() {
    return <Copy className={styles.text}>© 2018–2020 Lumiq Creative</Copy>;
  }
}

class Footer extends React.Component {
  render() {
    return (
      <Holder>
        <FooterInner>
          <FooterCopy />
        </FooterInner>
      </Holder>
    );
  }
}

export default Footer;

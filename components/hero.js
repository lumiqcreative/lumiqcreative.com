import Heading from "./heading";
import Holder from "./holder";
import styles from "./hero.module.sass";

class HeroInner extends React.Component {
  render() {
    return <div className={styles.inner}>{this.props.children}</div>;
  }
}

class HeroMessage extends React.Component {
  render() {
    return (
      <Heading className={styles.message} level={1} appearance={1}>
        I ar&shy;range shapes, com&shy;mand com&shy;pu&shy;ters, and put
        to&shy;ge&shy;ther words.
      </Heading>
    );
  }
}

class Hero extends React.Component {
  render() {
    return (
      <Holder>
        <HeroInner>
          <HeroMessage />
        </HeroInner>
      </Holder>
    );
  }
}

export default Hero;

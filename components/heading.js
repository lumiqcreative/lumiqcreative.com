import styles from "./heading.module.sass";

class HeadingRoot extends React.Component {
  render() {
    let className = styles.root;
    if (this.props.appearance >= 1 && this.props.level <= 6) {
      switch (this.props.appearance) {
        case 1:
          className += " " + styles.is1;
          break;
        case 3:
          className += " " + styles.is3;
          break;
        default:
          break;
      }
    }
    if (this.props.className) {
      className += " " + this.props.className;
    }
    return React.createElement(
      this.props.level >= 1 && this.props.level <= 6
        ? "h" + this.props.level
        : "span",
      { className: className },
      this.props.children
    );
  }
}

class Heading extends React.Component {
  render() {
    return (
      <HeadingRoot
        appearance={this.props.appearance}
        level={this.props.level}
        className={this.props.className}
      >
        {this.props.children}
      </HeadingRoot>
    );
  }
}

export default Heading;

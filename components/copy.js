import styles from "./copy.module.sass";

class CopyRoot extends React.Component {
  render() {
    let className = styles.root;
    if (this.props.className) {
      className += " " + this.props.className;
    }
    return <p className={className}>{this.props.children}</p>;
  }
}

class Copy extends React.Component {
  render() {
    return (
      <CopyRoot className={this.props.className}>
        {this.props.children}
      </CopyRoot>
    );
  }
}

export default Copy;

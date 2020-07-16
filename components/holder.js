import styles from "./holder.module.sass";

class HolderRoot extends React.Component {
  render() {
    let className = styles.root;
    if (this.props.className) {
      className += " " + this.props.className;
    }
    return <div className={className}>{this.props.children}</div>;
  }
}

class HolderContainer extends React.Component {
  render() {
    return <div className={styles.container}>{this.props.children}</div>;
  }
}

class Holder extends React.Component {
  render() {
    return (
      <HolderRoot className={this.props.className}>
        <HolderContainer>{this.props.children}</HolderContainer>
      </HolderRoot>
    );
  }
}

export default Holder;

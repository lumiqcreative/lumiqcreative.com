import styles from "./button.module.sass";

class ButtonRoot extends React.Component {
  render() {
    let className = styles.root;
    if (this.props.className) {
      className += " " + this.props.className;
    }
    return (
      <a className={className} href={this.props.href}>
        {this.props.children}
      </a>
    );
  }
}

class ButtonLabel extends React.Component {
  render() {
    return <span className={styles.label}>{this.props.children}</span>;
  }
}

class Button extends React.Component {
  render() {
    return (
      <ButtonRoot className={this.props.className} href={this.props.href}>
        <ButtonLabel>{this.props.children}</ButtonLabel>
      </ButtonRoot>
    );
  }
}

export default Button;

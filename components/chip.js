import styles from "./chip.module.sass";

class ChipRoot extends React.Component {
  render() {
    let className = styles.root;
    if (this.props.className) {
      className += " " + this.props.className;
    }
    if (this.props.active) {
      className += " " + styles.isActive;
    }
    return (
      <div
        onClick={this.props.onClick}
        data-value={this.props.dataValue}
        className={className}
      >
        {this.props.children}
      </div>
    );
  }
}

class ChipIndicator extends React.Component {
  render() {
    return (
      <div className={styles.indicator} data-value={this.props.dataValue} />
    );
  }
}

class ChipLabel extends React.Component {
  render() {
    return (
      <span className={styles.label} data-value={this.props.dataValue}>
        {this.props.children}
      </span>
    );
  }
}

class Chip extends React.Component {
  render() {
    return (
      <ChipRoot
        onClick={this.props.onClick}
        dataValue={this.props.dataValue}
        className={this.props.className}
        active={this.props.active}
      >
        <ChipIndicator dataValue={this.props.dataValue} />
        <ChipLabel dataValue={this.props.dataValue}>
          {this.props.children}
        </ChipLabel>
      </ChipRoot>
    );
  }
}

export default Chip;

import Heading from "./heading";
import Copy from "./copy";
import styles from "./table-row.module.sass";

class TableRowRoot extends React.Component {
  render() {
    let className = styles.root;
    if (this.props.className) {
      className += " " + this.props.className;
    }
    return (
      <a href={this.props.href} className={className}>
        {this.props.children}
      </a>
    );
  }
}

class TableRowTitle extends React.Component {
  render() {
    return (
      <Heading level={3} appearance={3} className={styles.title}>
        {this.props.children}
      </Heading>
    );
  }
}

class TableRowSubtitle extends React.Component {
  render() {
    return <Copy className={styles.subtitle}>{this.props.children}</Copy>;
  }
}

class TableRowMeta extends React.Component {
  render() {
    return <span className={styles.meta}>{" – " + this.props.children}</span>;
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <TableRowRoot className={this.props.className} href={this.props.href}>
        <TableRowTitle>{this.props.title}</TableRowTitle>
        <TableRowSubtitle>
          {this.props.subtitle}
          <TableRowMeta>{this.props.meta}</TableRowMeta>
        </TableRowSubtitle>
      </TableRowRoot>
    );
  }
}

export default TableRow;

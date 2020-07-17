import Chip from "./chip";
import Holder from "./holder";
import styles from "./library.module.sass";
import TableRow from "./table-row";
import Works from "../data/works";

class LibraryFilter extends React.Component {
  render() {
    return (
      <Chip
        active={this.props.active}
        className={styles.filter}
        dataValue={this.props.dataValue}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </Chip>
    );
  }
}

class LibraryFilters extends React.Component {
  render() {
    const categories = [
      ...new Set(this.props.works.map((work) => work.category)),
    ];
    const filters = [
      <LibraryFilter
        active={this.props.filterContent === ""}
        dataValue=""
        key="All Work"
        onClick={this.props.onFilterContentChange}
      >
        All Work
      </LibraryFilter>,
    ];
    categories.forEach((category) => {
      filters.push(
        <LibraryFilter
          active={this.props.filterContent === category}
          dataValue={category}
          key={category}
          onClick={this.props.onFilterContentChange}
        >
          {category}
        </LibraryFilter>
      );
    });
    return <div className={styles.filters}>{filters}</div>;
  }
}

class LibraryWorks extends React.Component {
  render() {
    const works = [];
    this.props.works.forEach((work) => {
      if (
        work.category === this.props.filterContent ||
        this.props.filterContent === ""
      ) {
        works.push(
          <TableRow
            className={styles.work}
            href={work.link}
            key={work.title}
            meta={work.published}
            subtitle={work.summary}
            title={work.title}
          />
        );
      }
    });
    return <div className={styles.works}>{works}</div>;
  }
}

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterContent: "",
    };
    this.handleFilterContentChange = this.handleFilterContentChange.bind(this);
  }
  handleFilterContentChange(event) {
    this.setState({
      filterContent: event.target.getAttribute("data-value"),
    });
  }
  render() {
    return (
      <Holder>
        <LibraryFilters
          filterContent={this.state.filterContent}
          onFilterContentChange={this.handleFilterContentChange}
          works={Works}
        />
        <LibraryWorks filterContent={this.state.filterContent} works={Works} />
      </Holder>
    );
  }
}

export default Library;

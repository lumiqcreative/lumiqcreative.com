import TableRow from "./table-row";
import Chip from "./chip";
import Holder from "./holder";
import styles from "./library.module.sass";
import Works from "../data/works";

class LibraryWorks extends React.Component {
  render() {
    const works = [];
    this.props.works.forEach((work) => {
      if (
        this.props.filterCategory &&
        work.category !== this.props.filterCategory
      ) {
        return;
      }
      works.push(
        <TableRow
          className={styles.work}
          href={work.link}
          key={work.title}
          subtitle={work.summary}
          meta={work.published}
          title={work.title}
        />
      );
    });
    return <div className={styles.works}>{works}</div>;
  }
}

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
        active={this.props.filterCategory === ""}
        dataValue=""
        key="All Works"
        onClick={this.props.onFilterCategoryChange}
      >
        All Works
      </LibraryFilter>,
    ];
    categories.forEach((category) => {
      filters.push(
        <LibraryFilter
          active={this.props.filterCategory === category}
          dataValue={category}
          key={category}
          onClick={this.props.onFilterCategoryChange}
        >
          {category}
        </LibraryFilter>
      );
    });
    return <div className={styles.filters}>{filters}</div>;
  }
}

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterCategory: "",
    };
    this.handleFilterCategoryChange = this.handleFilterCategoryChange.bind(
      this
    );
  }
  handleFilterCategoryChange(event) {
    this.setState({
      filterCategory: event.target.getAttribute("data-value"),
    });
  }
  render() {
    return (
      <Holder>
        <LibraryFilters
          works={Works}
          filterCategory={this.state.filterCategory}
          onFilterCategoryChange={this.handleFilterCategoryChange}
        />
        <LibraryWorks
          works={Works}
          filterCategory={this.state.filterCategory}
        />
      </Holder>
    );
  }
}

export default Library;

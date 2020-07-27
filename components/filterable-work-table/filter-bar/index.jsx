import Chip from "components/chip";
import { media } from "theme";

const FilterBar = (props) => {
  const items = [
    <Chip
      active={props.filterText == ""}
      value=""
      key="All Work"
      onClick={props.onFilterTextChange}
    >
      All Work
    </Chip>,
  ];
  [...new Set(props.works.map((work) => work.category))].forEach((category) => {
    items.push(
      <Chip
        active={props.filterText == category}
        css={{ margin: "8px 0 0 0", [media[0]]: { margin: "0 0 0 24px" } }}
        value={category}
        key={category}
        onClick={props.onFilterTextChange}
      >
        {category}
      </Chip>
    );
  });
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        [media[0]]: { flexDirection: "row" },
      }}
    >
      {items}
    </div>
  );
};

export default FilterBar;

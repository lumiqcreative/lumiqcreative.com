import WorkRow from "../work-row";

const WorkTable = (props) => {
  const rows = [];
  props.works.forEach((work) => {
    if (work.category == props.filterText || props.filterText == "") {
      rows.push(
        <WorkRow
          href={work.link}
          key={work.title}
          meta={work.published}
          subtitle={work.summary}
          title={work.title}
        />
      );
    }
  });
  return <div css={{ marginTop: 24 }}>{rows}</div>;
};

export default WorkTable;

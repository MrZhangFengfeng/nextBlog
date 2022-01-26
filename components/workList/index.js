import WorkItem from "../work/index";
import styles from "./index.module.scss";

const WorkList = ({ list = [] }) => {
  return (
    <div className={styles.wrap}>
      {list.map &&
        list.map((work) => {
          return <WorkItem work={work} />;
        })}
    </div>
  );
};

export default WorkList;

import Link from "next/link";
import { useMemo } from "react";
import Work from "../work/index";
import styles from "./index.module.css";

const WorkList = ({ list = [] }) => {
  return (
    <div className={styles.wrap}>
      {list.map &&
        list.map((item) => {
          return <Work item={item} />;
        })}
    </div>
  );
};

export default WorkList;

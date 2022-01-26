import styles from "./index.module.scss";
import Image from "next/image";
const WorkItem = ({ work = {} }) => {
  return (
    <div className={styles.item} key={work.title}>
      <div className={styles.poster}>
        <Image src={work.poster} alt={work.title} width={500} height={400} />
      </div>
      <div className={styles.title}>{work.title}</div>
    </div>
  );
};

export default WorkItem;

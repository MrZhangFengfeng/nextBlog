import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";
const WorkItem = ({ work = {} }) => {
  return (
    <div className={styles.item}>
      <div className={styles.poster}>
        <Image src={work.poster} alt={work.title} width={150} height={270} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{work.title}</div>
        <div className={styles.skills}>{work.skills}</div>
        <div className={styles.desc}>{work.desc}</div>
      </div>
    </div>
  );
};

export default WorkItem;

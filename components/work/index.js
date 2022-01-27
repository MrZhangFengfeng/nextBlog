import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
const WorkItem = ({ work = {} }) => {
  return (
    <div className={styles.item} key={work.title}>
      <div className={styles.poster}>
        <Link href={`/details?id=${work.id}`}>
          <Image src={work.poster} alt={work.title} width={500} height={400} />
        </Link>
      </div>
      <div className={styles.title}>{work.title}</div>
    </div>
  );
};

export default WorkItem;

import WorkItem from "../work/index";
import styles from "./index.module.scss";
import { Button, Space, Swiper, Toast } from "antd-mobile";
import { useReducer } from "react";

const WorkList = ({ workData }) => {
  const works = workData.map((work, index) => (
    <Swiper.Item key={index}>
      <div className={styles.content}>
        <WorkItem work={work} />
      </div>
    </Swiper.Item>
  ));

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>搬砖记录</h2>
      <Swiper
        autoplay
        slideSize={70}
        trackOffset={15}
        loop
        stuckAtBoundary={false}
        indicator={(total, current) => (
          <div className={styles.customIndicator}>
            {`${current + 1} / ${total}`}
          </div>
        )}
      >
        {works}
      </Swiper>
    </div>
  );
};

export default WorkList;

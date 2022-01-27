import React, { useLayoutEffect, useState, useEffect } from "react";
import { Skeleton, Image } from "antd-mobile";
import styles from "./index.module.scss";
import { getWorkDataDetail } from "../../lib/work";

const WorkDetail = ({}) => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [workDetail, setWorkDetail] = useState({});

  const loadImage = () => {
    console.log("456456");
    setShowSkeleton(false);
  };

  useEffect(() => {
    if (!!window) {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      const id = params.id;
      const workDetail = getWorkDataDetail(id);
      setWorkDetail(workDetail);
    }
  });

  useLayoutEffect(() => {
    setTimeout(() => {
      loadImage();
    }, 1000);
  }, []);
  return (
    <div>
      {showSkeleton ? (
        <React.Fragment>
          <Skeleton animated className={styles.customImg} />
          <Skeleton.Title animated />
          <Skeleton.Title animated />
          <Skeleton.Paragraph lineCount={15} animated />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Image src={workDetail.poster} onLoad={loadImage} />
          <div className={styles.content}>
            <h1 className={styles.title}>{workDetail.title}</h1>
            <h2 className={styles.technologyStack}>
              技术栈：{workDetail.technologyStack}
            </h2>
            <p>{workDetail.desc}</p>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
export default WorkDetail;

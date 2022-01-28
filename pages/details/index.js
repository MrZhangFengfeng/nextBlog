import React, { useLayoutEffect, useState, useEffect } from "react";
import { Skeleton } from "antd-mobile";
import Image from "next/image";
import styles from "./index.module.scss";
import { getWorkDataDetail } from "../../lib/work";

const WorkDetail = () => {
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
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      loadImage();
    }, 500);
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
          <Image src={workDetail.poster} width={375} height={300} />
          <div className={styles.content}>
            <h1 className={styles.title}>{workDetail.title}</h1>
            <div className={styles.gap}></div>
            <h2 className={styles.technologyStack}>
              {workDetail.technologyStack.map((item) => {
                return (
                  <Image src={`/images/${item}.png`} width={50} height={50} />
                );
              })}
            </h2>
            <p>{workDetail.desc}</p>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
export default WorkDetail;

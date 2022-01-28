import React, { useLayoutEffect, useState, useEffect } from "react";
import { Skeleton } from "antd-mobile";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import { getWorkDataDetail } from "../../lib/work";

const WorkDetail = () => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [workDetail, setWorkDetail] = useState({});
  const [logos, setLogos] = useState([]);
  const [info, setInfo] = useState([]);
  const [lights, setLights] = useState([]);
  const [showBack, setShowBack] = useState(false);

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
      const logos =
        workDetail?.technologyStack.map((item) => {
          return <Image src={`/images/${item}.png`} width={50} height={50} />;
        }) || [];

      const info =
        workDetail?.info?.split("|").map((item) => {
          return <li className={styles.desc}>{item}</li>;
        }) || [];

      const lights =
        workDetail?.highlights?.split("|").map((item) => {
          return <li className={styles.desc}>{item}</li>;
        }) || [];

      setWorkDetail(workDetail);
      setLogos(logos);
      setInfo(info);
      setLights(lights);
      let timer = setTimeout(() => {
        setShowBack(true);
      }, 500);
    }
    return () => {
      clearTimeout(timer);
    };
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
            <div className={styles.technologyStack}>{logos}</div>
            <h2 className={styles.subtitle}>项目背景</h2>
            <p className={styles.desc}>{workDetail.background}</p>
            <h2 className={styles.subtitle}>项目内容</h2>
            {info}
            <h2 className={styles.subtitle}>项目亮点</h2>
            {lights}
          </div>
        </React.Fragment>
      )}

      {showBack && (
        <Link href="/">
          <a className={styles.back}>back</a>
        </Link>
      )}
    </div>
  );
};
export default WorkDetail;

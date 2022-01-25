import Head from "next/head";
import { useState, useEffect, useLayoutEffect, useReducer } from "react";
import Layout, { siteTitle } from "../components/layout";
import styles from "./index.module.scss";
import WorkList from "../components/workList/index";

export default function Home() {
  const [clientInfo, setClientInfo] = useState({
    width: "100%",
    height: "100%",
  });
  const [works] = useState(() => {
    return [
      {
        title: "zxf",
        poster: "ssss",
        desc: "zzzz",
      },
      {
        title: "zxf",
        poster: "ssss",
        desc: "zzzz",
      },
      {
        title: "zxf",
        poster: "ssss",
        desc: "zzzz",
      },
      {
        title: "zxf",
        poster: "ssss",
        desc: "zzzz",
      },
      {
        title: "zxf",
        poster: "ssss",
        desc: "zzzz",
      },
      {
        title: "zxf",
        poster: "ssss",
        desc: "zzzz",
      },
    ];
  });
  useLayoutEffect(() => {});

  useEffect(() => {}, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <div
          className={`${styles.section} ${styles.index}`}
          style={{ width: clientInfo.width, height: clientInfo.height }}
        ></div>
        <div className={`${styles.section} ${styles.works}`}>
          <WorkList list={works} />
        </div>
        <div></div>
      </main>
    </Layout>
  );
}

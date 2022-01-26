import Head from "next/head";
import { useState, useEffect, useLayoutEffect, useReducer } from "react";
import Layout, { siteTitle } from "../components/layout";
import styles from "./index.module.css";
import WorkList from "../components/workList/index";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function Home() {
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

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <Link
          activeClass="active"
          to="hello"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          welcome
        </Link>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          works
        </Link>
      </header>
      <main>
        <Element name="hello" className="element">
          <div className={`${styles.section} ${styles.hello}`}></div>
        </Element>
        <Element name="work" className="element">
          <div className={`${styles.section} ${styles.works}`}>
            <WorkList list={works} />
          </div>
        </Element>

        <div></div>
      </main>
    </Layout>
  );
}

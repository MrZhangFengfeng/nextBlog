import Head from "next/head";
import { useState, useEffect, useLayoutEffect, useReducer } from "react";
import Layout, { siteTitle } from "../components/layout";
import styles from "./index.module.scss";
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
        title: "能量周秒杀",
        skills: "wxmp、react、mobx、scss",
        poster:
          "https://images3.c-ctrip.com/marketing/2019/05/energy/header.png",
        desc: "zzzz",
      },
      {
        title: "春节集卡",
        skills: "wxmp、react、mobx、scss",
        poster:
          "http://r.photo.store.qq.com/psc?/V51goTmI3BDDVg4SCW3z4HaCdY4IyLzb/45NBuzDIW489QBoVep5mcU5.7qUIgw1AeXXITzgybg4xteH9uBW4TKRr2ppPx9xVh9IK1CyCeZPD9BVhKkShx6m9.OTTPM76u1egy1KcGmg!/r",
        desc: "zzzz",
      },
      {
        title: "国庆点亮城市",
        skills: "wxmp、react、mobx、scss",
        poster:
          "https://images3.c-ctrip.com/marketing/2021/09/citylight/poster.jpg",
        desc: "zzzz",
      },
      {
        title: "周周乐",
        skills: "wxmp",
        poster:
          "http://r.photo.store.qq.com/psc?/V51goTmI3BDDVg4SCW3z4HaCdY4IyLzb/45NBuzDIW489QBoVep5mcU5.7qUIgw1AeXXITzgybg4nLSBjZd9BIoUszHz002dyXk0Z2Wb44kPPr2R1BtAy22eKxwQwHkb4qZjBgwNmrOY!/r",
        desc: "zzzz",
      },
      {
        title: "CMS",
        skills: "react、mobx、scss",
        poster: "/",
        desc: "zzzz",
      },
      {
        title: "代开发平台",
        skills: "react、mobx、scss",
        poster: "/",
        desc: "zzzz",
      },
    ];
  });

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
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
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          skills
        </Link>
      </header>
      <main>
        <Element name="hello" className="element">
          <div className={`${styles.section} ${styles.hello}`}>
            <h1>Welcome To My Website</h1>
          </div>
        </Element>
        <Element name="work" className="element">
          <div className={`${styles.section} ${styles.works}`}>
            <WorkList list={works} />
          </div>
        </Element>
        <Element name="skills" className="element">
          <div className={`${styles.section} ${styles.skills}`}></div>
        </Element>
        <div></div>
      </main>
    </Layout>
  );
}

import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Demo from "../components/animal/index";
import styles from "./index.module.scss";
import WorkList from "../components/workList/index";
import Skills from "../components/skills/index";
import Contact from "../components/contact/index";
import { getSkillData } from "../lib/skill";
import { getWorkData } from "../lib/work";
import Image from "next/image";
import Link from "next/link";
import {
  Link as ScrollLink,
  Element,
  animateScroll as scroll,
} from "react-scroll";

export default class Home extends React.Component {
  componentDidCatch(error, info) {
    console.log("error", error);
    console.log("info", info);
    return true;
  }
  render() {
    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <header className={styles.header}>
          <ScrollLink
            activeClass="active"
            to="hello"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            welcome
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            works
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            skills
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="solution"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            solution
          </ScrollLink>
        </header>
        <main>
          <Element name="hello" className="element">
            <div className={`${styles.section} ${styles.hello}`}>
              <h1>
                ??????
                <br />
                ??????????????????
                <br />
                ?????????????????????
              </h1>
              <h2>????????????????????????????????????????????????????????????</h2>
              <Demo />
            </div>
          </Element>
          <Element name="work">
            <div className={`${styles.section} ${styles.works}`}>
              <WorkList workData={this.props.workData} />
            </div>
          </Element>
          <Element name="skills">
            <div className={`${styles.section} ${styles.skills}`}>
              <Skills skillData={this.props.skillData} />
            </div>
          </Element>
          <Element name="solution">
            <div className={`${styles.section} ${styles.solution}`}>
              <h2 className={styles.title}>??????????????????</h2>
              <Link href={`/solution`}>
                <div
                  className={styles["solution-img"]}
                  style={{
                    backgroundImage: `url('/images/hongmeng.png')`,
                    backgroundSize: "100% 100%",
                  }}
                ></div>
              </Link>
            </div>
          </Element>
          <Element name="contact">
            <div className={`${styles.section} ${styles.contact}`}>
              <Contact />
            </div>
          </Element>
        </main>
      </Layout>
    );
  }
}

export const getServerSideProps = (context) => {
  const skillData = getSkillData();
  const workData = getWorkData();
  return {
    props: {
      skillData,
      workData,
    },
  };
};

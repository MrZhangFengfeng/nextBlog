import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Demo from "../components/animal/index";
import styles from "./index.module.scss";
import WorkList from "../components/workList/index";
import Skills from "../components/skills/index";
import Contact from "../components/contact/index";
import { getSkillData } from "../lib/skill";
import { Link, Element, animateScroll as scroll } from "react-scroll";

export default function Home({ skillData }) {
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
          offset={-50}
          duration={500}
        >
          welcome
        </Link>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          works
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          skills
        </Link>
      </header>
      <main>
        <Element name="hello" className="element">
          <div className={`${styles.section} ${styles.hello}`}>
            <h1>
              你好
              <br />
              我是张学峰，
              <br />
              一名前端开发。
            </h1>
            <h2>热爱生活，积极乐观，相信明天总是美好的。</h2>
            <Demo />
          </div>
        </Element>
        <Element name="work">
          <div className={`${styles.section} ${styles.works}`}>
            <WorkList />
          </div>
        </Element>
        <Element name="skills">
          <div className={`${styles.section} ${styles.skills}`}>
            <Skills skillData={skillData} />
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

export const getServerSideProps = (context) => {
  const skillData = getSkillData();
  return {
    props: {
      skillData,
    },
  };
};

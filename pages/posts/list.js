import { useEffect } from "react";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";

export default function List({ allPostsData }) {
  useEffect(() => {
    reqTest();
  });
  const reqTest = async () => {
    const res = await fetch(
      `https://m.ctrip.com/restapi/soa2/16894/tcgOpenHomePage`
    );
  };
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// getStaticProps only runs on the server-side
// It won’t even be included in the JS bundle for the browser.
// getStaticProps can only be exported from a page. You can’t export it from non-page files.
// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

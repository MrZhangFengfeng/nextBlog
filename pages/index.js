import Head from "next/head";
import { useState } from "react";
import { Button } from "antd-mobile";
import Layout, { siteTitle } from "../components/layout";
import Menu from "../components/menu/index";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(() => {
      return !showMenu;
    });
  };
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Button onClick={toggleMenu}>{showMenu + ""}</Button>
      {showMenu && <Menu />}
    </Layout>
  );
}

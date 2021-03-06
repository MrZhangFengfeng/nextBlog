import styles from "./index.module.scss";
import Image from "next/image";
import { Image as AntImage, List } from "antd-mobile";
import { useState } from "react";
const Contact = () => {
  const [nets] = useState([
    {
      logo: "/images/github.jfif",
      name: "GitHub",
      description: "https://github.com/MrZhangFengfeng",
    },
    {
      logo:
        "https://sf1-scmcdn-tos.pstatp.com/goofy/xitu_extension/static/gold.981a5510.svg",
      name: "掘金",
      description: "https://juejin.cn/user/1626932942212456",
    },
  ]);
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>社交网络</h2>
      <List>
        {nets.map((net) => (
          <List.Item
            key={net.name}
            prefix={
              <Image
                src={net.logo}
                style={{ borderRadius: 20 }}
                width={40}
                height={40}
              />
            }
            description={net.description}
          >
            {net.name}
          </List.Item>
        ))}
      </List>

      <h2 className={styles.title}>微信</h2>

      <div className={styles.subwrap}>
        <Image src="/images/wx.jpg" width={120} height={120} />
        <div className={styles.desc}>
          Hey guys, <br />
          lets go together.
        </div>
      </div>

      <h2 className={styles.title}>微信公众号</h2>
      <div className={styles.subwrap}>
        <Image src="/images/gzh.jpg" width={120} height={120} />
        <div className={styles.desc}>
          工作和学习
          <br />
          中的一些分享与记录。
        </div>
      </div>

      <p className={styles["site-desc"]}>
        Designed and developed by zhangxuefeng.
      </p>
      <p className={styles["site-desc"]}>
        Copyright ©2022 https://zhangxuefengblog.vercel.app/ All Rights
        Reserved.
      </p>
    </div>
  );
};

export default Contact;

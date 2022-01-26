import styles from "./index.module.scss";
import Image from "next/image";
import { Image as AntImage, List } from "antd-mobile";
const Contact = () => {
  const nets = [
    {
      avatar: "/images/github.png",
      name: "GitHub",
      description: "https://github.com/MrZhangFengfeng",
    },
    {
      avatar:
        "https://sf1-scmcdn-tos.pstatp.com/goofy/xitu_extension/static/gold.981a5510.svg",
      name: "掘金",
      description: "https://juejin.cn/user/1626932942212456",
    },
  ];
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>社交网络</h2>
      <List>
        {nets.map((user) => (
          <List.Item
            key={user.name}
            prefix={
              <AntImage
                src={user.avatar}
                style={{ borderRadius: 20 }}
                fit="cover"
                width={40}
                height={40}
              />
            }
            description={user.description}
          >
            {user.name}
          </List.Item>
        ))}
      </List>

      <h2 className={styles.title}>微信</h2>
      <Image src="/images/wx.jpg" width={120} height={120} />

      <h2 className={styles.title}>微信公众号</h2>
      <Image src="/images/gzh.jpg" width={120} height={120} />

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

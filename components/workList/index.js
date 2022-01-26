import WorkItem from "../work/index";
import styles from "./index.module.scss";
import { Button, Space, Swiper, Toast } from "antd-mobile";
import { useState } from "react";

const WorkList = () => {
  const [list] = useState(() => {
    return [
      {
        title: "能量周秒杀",
        poster:
          "https://pages.c-ctrip.com/union/2019/nengliangzhou/750%C3%97600%E5%BD%AD%E4%BA%8E%E6%99%8F.png",
      },
      {
        title: "春节集卡",
        poster:
          "https://pages.c-ctrip.com/union/Richard/cardCollectActivity/inviteTaskforPrize/activityShareCard.png",
      },
      {
        title: "国庆点亮城市",
        poster:
          "https://images3.c-ctrip.com/marketing/2021/09/citylight/shareCard/mini_share_card0.jpg",
      },
      {
        title: "周周乐",
        poster:
          "https://images3.c-ctrip.com/marketing/2021/02/lottery/share_card.jpg",
      },
      {
        title: "划点游戏",
        poster: "https://pages.c-ctrip.com/union/2021/1024task/xcxpic.jpg",
      },
      {
        title: "抽奖零元游",
        poster:
          "https://pages.c-ctrip.com/union/2021/wechatprogram/1may/%E5%93%81%E8%B4%A8%E7%94%9F%E6%B4%BB%E5%A4%B4%E5%9B%BE.jpg",
      },
      {
        title: "签到",
        poster:
          "https://images3.c-ctrip.com/marketing/2019/01/signInPage/share_image.jpg",
      },
    ];
  });

  const works = list.map((work, index) => (
    <Swiper.Item key={index}>
      <div
        className={styles.content}
        onClick={() => {
          Toast.show(`你点击了卡片 ${index + 1}`);
        }}
      >
        <WorkItem work={work} />
      </div>
    </Swiper.Item>
  ));
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>some works</h2>
      <Swiper
        autoplay
        slideSize={70}
        trackOffset={10}
        loop
        stuckAtBoundary={false}
        indicator={(total, current) => (
          <div className={styles.customIndicator}>
            {`${current + 1} / ${total}`}
          </div>
        )}
      >
        {works}
      </Swiper>
    </div>
  );
};

export default WorkList;

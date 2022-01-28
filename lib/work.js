export function getWorkData() {
  return [
    {
      id: "1",
      title: "能量周秒杀",
      technologyStack: ["wxmp", "react", "mobx", "node"],
      background: "迎五一黄金周，旅游大促",
      info:
        "用户参与活动通过多种途径/任务获取能量值。|秒杀周内每天多个时间点根据用户所在地理位置获取特定秒杀商品列表.|到达时刻点后用户使用能量值进行商品秒杀。|秒杀到的实物奖品可以地址填写包邮到家，虚拟奖品实时发送/充值。",
      highlights: "秒杀削峰操作|严格风控|前端倒计时准确性|避免无效点击与请求",
      poster:
        "https://pages.c-ctrip.com/union/2019/nengliangzhou/750%C3%97600%E5%BD%AD%E4%BA%8E%E6%99%8F.png",
    },
    {
      id: "2",
      title: "春节集卡",
      technologyStack: ["anime", "react", "mobx", "node"],
      poster:
        "https://pages.c-ctrip.com/union/Richard/cardCollectActivity/inviteTaskforPrize/activityShareCard.png",
    },
    {
      id: "3",
      title: "国庆点亮城市",
      technologyStack: ["anime", "react", "mobx", "canvas"],
      poster:
        "https://images3.c-ctrip.com/marketing/2021/09/citylight/shareCard/mini_share_card0.jpg",
    },
    {
      id: "4",
      title: "周周乐",
      technologyStack: ["wxmp", "css"],
      poster:
        "https://images3.c-ctrip.com/marketing/2021/02/lottery/share_card.jpg",
    },
    {
      id: "5",
      title: "划点游戏",
      technologyStack: ["canvas", "react", "mobx"],
      poster: "https://pages.c-ctrip.com/union/2021/1024task/xcxpic.jpg",
    },
    {
      id: "6",
      title: "抽奖零元游",
      technologyStack: ["canvas", "react", "wxmp"],
      poster:
        "https://pages.c-ctrip.com/union/2021/wechatprogram/1may/%E5%93%81%E8%B4%A8%E7%94%9F%E6%B4%BB%E5%A4%B4%E5%9B%BE.jpg",
    },
    {
      id: "7",
      title: "CMS",
      technologyStack: ["next", "react", "antd"],
      poster: "/images/cms.png",
    },
    {
      id: "8",
      title: "代开发平台",
      technologyStack: ["next", "react", "antd"],
      poster: "/images/thirdpart.png",
    },
  ];
}

export function getWorkDataDetail(id) {
  const workList = getWorkData();
  let i;
  let len = workList.length;
  let detail = null;
  for (i = 0; i < len; i++) {
    if (id == workList[i].id) {
      detail = workList[i];
      break;
    }
  }

  return detail;
}

export function getWorkData() {
  return [
    {
      id: "1",
      title: "能量周秒杀",
      technologyStack: ["wxmp", "react", "mobx", "node"],
      background: "迎五一黄金周，旅游大促(携程集团)",
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
      background: "迎虎年新春，集卡兑好礼(携程集团)",
      info:
        "用户参与活动通过签到和做任务任务获得抽卡次数。|用户通过抽卡可以随机获得多张卡牌中的任意一张|通过集齐不同的卡牌组合，分别可以兑换不同等级的奖品。|锁定奖品后通过邀请好友助力最后真实获得奖品",
      highlights:
        "抽卡、摇一摇JS动画|多组件的懒加载|node端绘制海报保证不同机型海报一致性",
      poster:
        "https://pages.c-ctrip.com/union/Richard/cardCollectActivity/inviteTaskforPrize/activityShareCard.png",
    },
    {
      id: "3",
      title: "国庆点亮城市",
      technologyStack: ["anime", "react", "mobx", "canvas"],
      background: "迎国庆，点亮城市获得超值礼品卡(携程集团)",
      info:
        "用户参与游戏通过做任务获得掷色子次数，控制小汽车在地图上跑动。|小汽车每次到达城市后解锁对应城市及奖励。",
      highlights: "canvas动画|CSS3动画|任务组件化|功能插件化",
      poster:
        "https://images3.c-ctrip.com/marketing/2021/09/citylight/shareCard/mini_share_card0.jpg",
    },
    {
      id: "4",
      title: "周周乐",
      technologyStack: ["wxmp", "css"],
      background: "日常活动，携程版大乐透(携程集团)",
      info:
        "用户参与活动通过多种途径/任务获取抽卡牌次数。|用户每次抽取一组（4张 A-K）卡牌.|每周一期，每期可以获得多组卡牌。|每周三晚八点定时开奖，中奖情况及时通知用户。|历史战绩中展示每期中奖卡牌以及每一等级中奖人数以及奖励",
      highlights: "多种动画效果|前端大数据量展示|",
      poster:
        "https://images3.c-ctrip.com/marketing/2021/02/lottery/share_card.jpg",
    },
    {
      id: "6",
      title: "抽奖零元游",
      technologyStack: ["canvas", "react", "wxmp"],
      background: "积攒抽奖券，抽免房机会(携程集团)",
      info:
        "用户参与活动通过多种途径/任务获取抽奖券。|用户可以同时参与多个奖品的抽奖，每个奖品抽奖券隔离，互不相通.|每个奖品中奖几率和抽奖券张数呈现正相关",
      highlights: "活动组件化|强复用性活动|配置化常年多活动形式投放",
      poster:
        "https://pages.c-ctrip.com/union/2021/wechatprogram/1may/%E5%93%81%E8%B4%A8%E7%94%9F%E6%B4%BB%E5%A4%B4%E5%9B%BE.jpg",
    },
    {
      id: "7",
      title: "CMS",
      technologyStack: ["next", "react", "antd"],
      background: "内容管理平台(携程集团)",
      info:
        "活动/奖品配置|地推二维码工具|通用二维码|长短链|直播管理（直播间、货架、商品）|风控|。。。",
      highlights: "业务配置化|运营便捷化",
      poster: "/images/cms.png",
    },
    {
      id: "8",
      title: "代开发平台",
      technologyStack: ["next", "react", "antd"],
      background: "微信第三方代开发平台(携程集团)",
      info:
        "代酒店、民宿等商家进行公众号/小程序的创建、开发、维护等工作（具体涉及公众号菜单管理、小程序基本信息配置、运营数据可视化、资质审核、代码提交等）|公众号文章编辑，多公众号一键推送及发布",
      highlights:
        "自定义富文本编辑器|微信小程序及公众号官方后台功能同步|数据可视化",
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

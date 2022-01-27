export function getSkillData() {
  return {
    id: "JavaScript",
    children: [
      {
        id: "前端工程化",
        children: [
          {
            id: "脚手架",
          },
          {
            id: "规范化",
            children: [
              {
                id: "eslint",
              },
              {
                id: "git规范",
              },
              {
                id: "prettier",
              },
              {
                id: "进度管理",
              },
            ],
          },
          {
            id: "单元测试",
          },
          {
            id: "CICD",
          },
          {
            id: "监控",
            children: [
              {
                id: "错误监控",
              },
              {
                id: "性能监控",
              },
              {
                id: "埋点记录",
              },
            ],
          },
          {
            id: "babel",
            children: [
              {
                id: "tree-shaking",
              },
            ],
          },
          {
            id: "postcss",
          },
          {
            id: "webpack",
            children: [
              {
                id: "plugin",
              },
              {
                id: "loader",
              },
              {
                id: "code-split",
              },
            ],
          },
        ],
      },
      {
        id: "小程序",
        children: [
          {
            id: "微信小程序",
            children: [
              {
                id: "双线程架构",
              },
              {
                id: "生命周期",
              },
              {
                id: "路由系统",
              },
              {
                id: "第三方框架实现",
              },
            ],
          },
          {
            id: "百度小程序",
          },
          {
            id: "支付宝小程序",
          },
        ],
      },
      {
        id: "React",
        children: [
          {
            id: "React两大工作循环",
          },
          {
            id: "diff算法",
          },
          {
            id: "mobx",
          },
          {
            id: "hooks",
          },
          {
            id: "fiber架构",
          },
          {
            id: "react-router",
          },
          {
            id: "react-dom",
          },
        ],
      },
      {
        id: "Vue",
      },
      {
        id: "Node",
        children: [
          {
            id: "express",
          },
          {
            id: "koa2",
          },
        ],
      },
      {
        id: "数据可视化",
        children: [
          {
            id: "svg",
          },
          {
            id: "canvas",
          },
          {
            id: "Echarts",
          },
          {
            id: "AntV",
          },
        ],
      },
      {
        id: "前端动画",
        children: [
          {
            id: "CSS3",
          },
          {
            id: "SVGA",
          },
          {
            id: "anime",
          },
          {
            id: "Canvas",
          },
          {
            id: "龙骨",
          },
        ],
      },
    ],
  };
}

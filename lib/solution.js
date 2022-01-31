export function getSolutionData() {
  return [
    {
      id: "1",
      title: "前端大数据量排序和搜索",
      url: "",
    },
    {
      id: "2",
      title: "长列表",
      url: "",
    },
    {
      id: "3",
      title: "H5活动脚手架&工程化",
      url: "",
    },
    {
      id: "4",
      title: "前端页面动画选择",
      url: "",
    },
    {
      id: "5",
      title: "前端页面性能优化",
      url: "",
    },
    {
      id: "6",
      title: "canvas陷阱",
      url: "",
    },
    {
      id: "7",
      title: "HTTP请求的串行和并发控制",
      url: "",
    },
    {
      id: "8",
      title: "移动端调试方法",
      url: "",
    },
    {
      id: "9",
      title: "前端性能及错误监控",
      url: "",
    },
    {
      id: "10",
      title: "react数据传递的多种方式选择",
      url: "",
    },
    {
      id: "11",
      title: "算法与数据结构在前端的应用",
      url: "",
    },
    {
      id: "12",
      title: "项目组件化搭建",
      url: "",
    },
    {
      id: "13",
      title: "常用的开发利器",
      url: "",
    },
  ];
}

export function getSolutionDataDetail(id) {
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

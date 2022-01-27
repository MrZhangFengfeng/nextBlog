import styles from "./index.module.scss";
import React, { useEffect, useLayoutEffect } from "react";
import G6 from "@antv/g6";

const Skills = ({ skillData }) => {
  useLayoutEffect(() => {
    const container = document.getElementById("container");
    const width = container.scrollWidth;
    const height = container.scrollHeight || 400;
    const graph = new G6.TreeGraph({
      container: "container",
      width,
      height,
      linkCenter: true,
      modes: {
        default: [
          {
            type: "collapse-expand",
            onChange: function onChange(item, collapsed) {
              const data = item.get("model");
              data.collapsed = collapsed;
              return true;
            },
          },
          "drag-canvas",
          "zoom-canvas",
        ],
      },
      defaultNode: {
        size: 26,
      },
      layout: {
        type: "compactBox",
        direction: "RL",
        getId: function getId(d) {
          return d.id;
        },
        getHeight: () => {
          return 26;
        },
        getWidth: () => {
          return 26;
        },
        getVGap: () => {
          return 20;
        },
        getHGap: () => {
          return 30;
        },
        radial: true,
      },
    });

    graph.node(function (node) {
      return {
        label: node.id,
      };
    });
    graph.data(skillData);
    graph.render();
    graph.fitView();

    if (typeof window !== "undefined")
      window.onresize = () => {
        if (!graph || graph.get("destroyed")) return;
        if (!container || !container.scrollWidth || !container.scrollHeight)
          return;
        graph.changeSize(container.scrollWidth, container.scrollHeight);
      };
  });
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>技术栈</div>
      <div id="container"></div>
    </div>
  );
};

export default Skills;

import styles from "./index.module.scss";

const Skills = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>Skills</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="350"
        height="300"
        viewBox="0 0 700 600"
        className={styles.svg}
      >
        <line
          x1="375"
          y1="300"
          x2="150"
          y2="150"
          style={{ stroke: "rgb(99,99,99)", strokeWidth: 2 }}
        />
        <text x="120" y="140" fill="black" className={styles.svgtext}>
          前端工程化
        </text>
        <circle
          cx="150"
          cy="150"
          r="10"
          stroke="black"
          stroke-width="2"
          fill="black"
        />
        <circle
          cx="375"
          cy="300"
          r="15"
          stroke="black"
          stroke-width="2"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default Skills;

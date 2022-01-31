import { List, WaterMark } from "antd-mobile";
import {
  UnorderedListOutline,
  PayCircleOutline,
  SetOutline,
  SearchOutline,
  ContentOutline,
  TruckOutline,
} from "antd-mobile-icons";
import { useCallback } from "react";
import { getSolutionData } from "../../lib/solution";

const Solution = ({ solutionData = [] }) => {
  console.log("solutionData", solutionData);
  const cards = useCallback(() => {
    return solutionData.map((s) => {
      return (
        <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
          {s.title}
        </List.Item>
      );
    });
  }, [solutionData]);

  return (
    <div>
      <WaterMark content="zhangxuefeng" />
      <List header="可点击的功能列表">{cards()}</List>
    </div>
  );
};
export const getServerSideProps = () => {
  const solutionData = getSolutionData();
  return {
    props: {
      solutionData,
    },
  };
};
export default Solution;

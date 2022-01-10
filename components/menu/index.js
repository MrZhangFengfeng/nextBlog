import Link from "next/link";
import { List } from "antd-mobile";
import {
  UnorderedListOutline,
  PayCircleOutline,
  SetOutline,
} from "antd-mobile-icons";

export default function Menu() {
  return (
    <div className="menu-wrap">
      <List header="">
        <List.Item prefix={<UnorderedListOutline />}>
          <Link href={`/posts/list`}>
            <a>文章</a>
          </Link>
        </List.Item>
        <List.Item prefix={<PayCircleOutline />}>
          <Link href={`/`}>
            <a>文章</a>
          </Link>
        </List.Item>
        <List.Item prefix={<SetOutline />}>
          <Link href={`/`}>
            <a>文章</a>
          </Link>
        </List.Item>
      </List>
    </div>
  );
}

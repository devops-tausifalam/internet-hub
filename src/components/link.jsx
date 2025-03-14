import "./styles/link.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import meta from "./meta/hook.metadata.json" with { type: "json" };

export default function Linklist() {
  return (
    <div className="linkbox">
      <ul className="link-wrapper">
        {meta.links.map((link, index) => (
          <li className="link" key={index}>
            <a href={link.url}>{link.title}</a>
            <div className="hrefsymbol">
              <BsThreeDotsVertical className="icon" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

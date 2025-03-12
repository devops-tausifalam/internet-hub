import "./styles/link.css";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Linklist() {
  return (
    <div className="linkbox">
      <ul className="link-wrapper">
        <li className="link">
          <a href="#">My Portfolio</a>
          <div className="hrefsymbol">
            <MdKeyboardArrowRight className="icon"/>
          </div>
        </li>
        <li className="link">
          <a href="#">Resume</a>
          <div className="hrefsymbol">
            <MdKeyboardArrowRight className="icon"/>
          </div>
        </li>
        <li className="link">
          <a href="#">Instagram</a>
          <div className="hrefsymbol">
            <MdKeyboardArrowRight className="icon"/>
          </div>
        </li>
      </ul>
    </div>
  );
}

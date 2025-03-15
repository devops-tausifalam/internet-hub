import "./styles/share.scss";
import { MdOutlineIosShare } from "react-icons/md";

export default function Share() {
    return (
        <>
        <div className="sharebtn">
          <button>
            <MdOutlineIosShare className="icon"/>
          </button>
        </div>
        <div className="sharemenu"></div>
      </>
    );
}

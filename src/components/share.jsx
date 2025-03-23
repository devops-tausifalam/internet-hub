import "./styles/share.scss";
import { MdOutlineIosShare, MdOutlineClose, MdInsertLink, MdApps    } from "react-icons/md";
import {brandingForPages as Hook} from "./branding.jsx"

export function Share({onClick}) {
  return (
    <>
      <div className="sharebtn">
        <button onClick={onClick}>
          <MdOutlineIosShare className="icon" />
        </button>
      </div>
    </>
  );
}

export function ShareMenu({onClose}) {
  return (
    <>
      <div className="sharemenu">
        <div className="boxmodal">
            <div className="controls">
                <h2>
                    Share hook.
                </h2>
                <button onClick={onClose}>
                  <MdOutlineClose className="icon"/>
                </button>
            </div>
            <figure>
              <div className="avatar">

              </div>
              <div className="user-name">
                  <p>Tausif Alam</p>
              </div>
            </figure>
            <div className="functionBox">
              <section className="grid1">
                <div className="pageLinkbtn">
                  <button>
                    <MdInsertLink className="icon"/> 
                     copy hook
                  </button>
                </div>
                <div className="primarySharebtn">
                  <button>
                  <MdApps className="icon"/>
                  </button>
                </div>
              </section>
              <section className="grid2">
                <div className="socialicons"></div>
              </section>
            </div>
            <div className="reportsection"></div>
        </div>
      </div>
    </>
  );
}

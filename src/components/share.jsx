import "./styles/share.scss";
import { RiFlag2Line } from "react-icons/ri";
import { MdOutlineIosShare, MdOutlineClose } from "react-icons/md";
// common social icons
import { FaSnapchatGhost } from "react-icons/fa";
import {
  FaSquareFacebook,
  FaFacebookMessenger,
  FaWhatsapp,
  FaSignalMessenger,
  FaLinkedin,
  FaBluesky,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

// metadata for profile and user names and other details if required
import meta from "./meta/hook.metadata.json" with { type: "json" };


export function Share({ onClick }) {
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

export function ShareMenu({ onClose }) {
  return (
    <>
      <div className="sharemenu">
        <div className="boxmodal">
          <div className="controls">
            <h2>Share hook.</h2>
            <button onClick={onClose}>
              <MdOutlineClose className="icon" />
            </button>
          </div>
          <figure>
            <div className="avatar">
              <img src={meta.profile.avatar} alt="user-avatar" />
            </div>
            <div className="user-name">
              <p>
                {meta.profile.name}
              </p>
              <span>{meta.profile.bio}</span>
            </div>
          </figure>
          <div className="functionBox">
              <div className="socialicons">
                <button>
                  <FaSquareFacebook className="icon" />
                  <span className="icon-label">Facebook</span>
                </button>
                <button>
                  <FaFacebookMessenger className="icon" />
                  <span className="icon-label">Messenger</span>
                </button>
                <button>
                  <FaWhatsapp className="icon" />
                  <span className="icon-label">WhatsApp</span>
                </button>
                <button>
                  <FaSignalMessenger className="icon" />
                  <span className="icon-label">Signal</span>
                </button>
                <button>
                  <FaLinkedin className="icon" />
                  <span className="icon-label">LinkedIn</span>
                </button>
                <button>
                  <FaSnapchatGhost className="icon" />
                  <span className="icon-label">Snapchat</span>
                </button>
                <button>
                  <FaBluesky className="icon" />
                  <span className="icon-label">Bluesky</span>
                </button>
                <button>
                  <FaXTwitter className="icon" />
                  <span className="icon-label">X</span>
                </button>
                <button>
                  <FaEnvelope className="icon" />
                  <span className="icon-label">Email</span>
                </button>
                <button className="primarySharebtn">
                  <span className="icon-label">more</span>
                </button>
              </div>
          </div>
          <div className="reportsection">
            <button>
                <RiFlag2Line /> Report this hook.
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

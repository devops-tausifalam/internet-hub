import "./styles/capsule.css";
import { MdEmail, MdIosShare } from "react-icons/md";
import { FaBluesky, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Socialbox() {
  return (
    <>
      <div className="wrapper">
        <div className="wide_cap">
          {/* capsule for social icons */}
          <button>
            <MdEmail className="icon" />
          </button>
          <button>
            <FaBluesky className="icon" />
          </button>
          <button>
            <FaLinkedin className="icon" />
          </button>
          <button>
            <FaGithub className="icon" />
          </button>
        </div>
        <div className="share_cap">
          {/* capsule for share button */}
          <button>
            <MdIosShare className="icon" />
          </button>
        </div>
      </div>
    </>
  );
}

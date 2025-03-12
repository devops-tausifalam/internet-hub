import "./styles/capsule.css";
import { MdEmail } from "react-icons/md";
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
      </div>
    </>
  );
}

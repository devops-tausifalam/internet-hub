import "./styles/capsule.scss";
import { memo } from "react";
import { 
  FaBluesky, 
  FaLinkedin,
  FaGithub, 
  FaEnvelope,
  FaLink,
  FaInstagram,
  FaXTwitter, 
  FaSnapchat, 
  FaTiktok,
  FaTwitch,
  FaDiscord,
  FaTelegram,
  FaWhatsapp,
  FaRedditAlien,
  FaFacebook,
  FaThreads,
  FaPinterest,
  FaQuora,
  FaMastodon,
  FaPatreon,
  FaStackOverflow,
  FaSquareBehance,
  FaSquareTumblr,
  FaFacebookMessenger,
  FaViber,
  FaDeviantart 
} from "react-icons/fa6";
import meta from "./meta/hook.metadata.json" with {type: "json"}
import { BsMessenger } from "react-icons/bs";


const Socialbox = () => {

  // use a pre-defined map to avoid name-conflicts with font-awesome namings
  const iconsMap = {
    bluesky: FaBluesky,
    linkedin: FaLinkedin,
    github: FaGithub,
    link: FaLink,
    envelope: FaEnvelope, // Email icon
    instagram: FaInstagram,
    twitter: FaXTwitter,
    snapchat: FaSnapchat,
    tiktok: FaTiktok,
    twitch: FaTwitch,
    discord: FaDiscord,
    telegram: FaTelegram,
    whatsapp: FaWhatsapp,
    reddit: FaRedditAlien,
    facebook: FaFacebook,
    threads: FaThreads,
    pinterest: FaPinterest,
    quora: FaQuora,
    mastodon: FaMastodon,
    patreon: FaPatreon,
    stackoverflow: FaStackOverflow,
    behance: FaSquareBehance,
    tumblr: FaSquareTumblr,
    messenger: FaFacebookMessenger,
    viber: FaViber,
    deviantart: FaDeviantart
  }

  return (
    <>
      <div className="wrapper">
        <div className="wide_cap">
        {meta.socials.map(({platform, url}, index) => {
          const IconComponent = iconsMap[platform.toLowerCase()];
          return IconComponent ? (
            <button key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
              <IconComponent className="icon" />
              </a>
            </button>
          ) : null;
        })}
        </div>
      </div>
    </>
  );
};

// Wrap with `memo` for performance optimization
export default Socialbox;

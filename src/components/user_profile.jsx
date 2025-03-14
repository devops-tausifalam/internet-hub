import "./styles/userProfile.css";
import meta from "./meta/hook.metadata.json" with {type: "json"}


export default function Userprofile() {
  return (
    <section className="user-profile">
      <div className="avatar-container">
        <img src={meta.profile.avatar} alt="avatar"/>
      </div>
      <header className="user-info">
        <h2 className="user-name">{meta.profile.name}</h2>
        <p className="user-bio">{meta.profile.bio}</p>
      </header>
    </section>
  );
}

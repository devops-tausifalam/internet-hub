import "./styles/userProfile.css";

export default function Userprofile() {
  return (
    <section className="user-profile">
      <div className="avatar-container">
        <img src="/Assets/avatar.jpg" alt="avatar"/>
      </div>
      <header className="user-info">
        <h2 className="user-name">Salaka Ruslan</h2>
        <p className="user-bio">I code to solve problems and explore Calculus, Physics, and Social Science. 
        A lifelong learner, always evolving.</p>
      </header>
    </section>
  );
}

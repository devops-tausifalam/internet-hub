import './components/styles/hook.css';
import Brand from "./components/branding.jsx";
import Userprofile from "./components/user_profile.jsx";
import Socialcapsule from "./components/capsule.jsx";
import Linklist from "./components/link.jsx";
import Share from "./components/share.jsx";

// import pexels for background images
import { createClient } from "pexels";
const pexel = createClient(import.meta.env.VITE_PEXELS_API);
const photo_query = "vibe, landscapes, technology, happy, aesthatic";

const device_orientation = () => {
  return window.matchMedia("(orientation: portrait)").matches
    ? "portrait"
    : "landscape";
};
pexel.photos
  .search({
    query: photo_query,
    orientation: device_orientation(),
    size: "medium",
    locale: "en_US",
    color: "black",
    per_page: 50,
  })
  .then((resp) => {
    if (resp.photos && resp.photos.length > 0) {
      const random_index = Math.floor(Math.random() * resp.photos.length); // integer +ve index for random images
      const selectedPhoto = resp.photos[random_index];
      document.body.style.backgroundImage = `url(${selectedPhoto.src.original})`;

      const attribution = document.querySelector('.pexel_attr p');
      if (attribution) {
        attribution.innerHTML =  `Photo by <a href="${selectedPhoto.photographer_url}" target="_blank">${selectedPhoto.photographer}</a>`;
      }
    }
  })
  .catch((error) => {
    console.error("Error Fetching pexel images", error);
  });

function App() {
  return (
    <div className="mainWrapper">
      <Share />
      <div className="appInner">
        <Userprofile />
        <Linklist />
        <Socialcapsule />
        <Brand />
      </div>

      <div className="pexel_attr">
        {/* from above pexel client function */}
        <p></p>
      </div>
    </div>
  );
}

export default App;

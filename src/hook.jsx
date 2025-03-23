import './components/styles/hook.scss';
import Brand from "./components/branding.jsx";
import Userprofile from "./components/user_profile.jsx";
import Socialcapsule from "./components/capsule.jsx";
import Linklist from "./components/link.jsx";
import {Share as ShareButton, ShareMenu} from "./components/share.jsx";
import meta from "./components/meta/hook.metadata.json" with { type: "json" };
// import pexels for background images
import { createClient } from "pexels";
import { useState } from 'react';
const pexel = createClient(import.meta.env.VITE_PEXELS_API);
const photo_query = meta.settings.bgPrefs; // import user prefernce from hook.metadata.json

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

      const img = new Image();
      img.src = selectedPhoto.src.original;
      img.onload = () => {
        document.body.style.setProperty("--bg-image", `url(${selectedPhoto.src.original})`);
        document.body.classList.add("bg-loaded"); // Trigger fade-in effect
        document.getElementById("root").classList.add("show"); // Fade in
      }

      // show the main page after loading background image successfully
      const attribution = document.querySelector('.pexel_attr p');
      if (attribution) {
        attribution.innerHTML =  `Photo by <a href="${selectedPhoto.photographer_url}" target="_blank">${selectedPhoto.photographer}</a>`;
      }
      document.querySelector(".mainWrapper").hidden = false;
    }
  })
  .catch((error) => {
    console.error("Error Fetching pexel images", error);
  });

function App() {
  const [showShareMenu, setShowShareMenu] = useState(false);

  return (
    <div className="mainWrapper" hidden>
      <ShareButton onClick={() => setShowShareMenu(true)}/>
      <div className="appInner">
        <Userprofile />
        <Linklist />
        <Socialcapsule />
        <Brand />
        <div className="pexel_attr">
        {/* from above pexel client function */}
        <p></p>
      </div>
      </div>
      {showShareMenu && (
        <ShareMenu onClose={() => setShowShareMenu(false)}/>
      )}
    </div>
  );
}

export default App;

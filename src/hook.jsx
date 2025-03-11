import './components/styles/hook.css'
import Brand from './components/branding.jsx'
import Userprofile from './components/user_profile.jsx'
import Socialcapsule  from './components/capsule.jsx'
import Linklist from './components/link.jsx'    

function App() {

  return (
    <div className='mainWrapper'>
     <Brand/>
     <Userprofile/>
     <Socialcapsule/>
     <Linklist/>
    </div>
  )
}

export default App

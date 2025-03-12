import Brand from './components/branding.jsx'
import Userprofile from './components/user_profile.jsx'
import Socialcapsule  from './components/capsule.jsx'
import Linklist from './components/link.jsx'    

function App() {

  return (
    <div className='mainWrapper'>
     <Userprofile/>
     <Linklist/>
     <Socialcapsule/>
     <Brand/>
    </div>
  )
}

export default App

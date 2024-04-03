import './App.css'
import BottomBar from './components/BottomBar'
import Home from './components/Home'
import Navbar  from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <Navbar />
      <Home/>
      <Sidebar/>
      <BottomBar/>
    </>
  )
}

export default App

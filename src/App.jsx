import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import Home from './components/Home'
import Server1 from './components/Server1';
import ServerList from './components/ServerList';
import Channel from './components/Channel';

function App() {

  return (
    <div className='flex'>
      <Router>
        <ServerList />
        <Routes>
          {/* <Home /> */}
          <Route path='/channel' element={<Channel />} />
          <Route path='/server1' element={<Server1 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App



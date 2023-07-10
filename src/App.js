import './App.css';
import './MessageView.css'
import Home from './main-page/Calendar_Home_Page';
import Home1 from './main-page/Message_Home_Page';
import Sidebar from './Calendar/Navigation_Sidebar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <div className='main-intent' style={{display: 'flex'}}>
        <div className='nav-sidebar'>
          <Sidebar/>
          {/* <Home/> */}
        </div>  
        <div className='suraj2' style={{width: '100%'}}>
          <Routes>
            <Route path='/' element={<Home/>}>
            </Route>

            <Route path='/home' element={<Home1/>}></Route>
          </Routes>
        </div>  
      </div>  
    </Router>  
    </>
    
  );
}

export default App;

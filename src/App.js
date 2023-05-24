import logo from './logo.svg';
import './App.css';
import Signin from './Components/Signup/Signup';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Signup from './Components/Login/Login';
import Error from './Components/Errors/Error';
import Dashboard from './Components/Dashboard/Dashboard';
import Join from './Components/Joins/Join';
import Join2 from './Components/Joins/Join2';
import Popup from './Components/Popupdash/Popup';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/dash' element={<Dashboard/>}/>
    <Route path='/join' element={<Join/>}/>
    <Route path='/join2' element={<Join2/>}/>
    <Route path='/newdash' element={<Popup/>}/>
    <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Forgetpassword from './components/Forgetpassword';
import {BrowserRouter,Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signup/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/forgetpassword" element={<Forgetpassword/>}/>
        </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;

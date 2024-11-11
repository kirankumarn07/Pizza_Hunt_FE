import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';
// import { InputValidate } from './Components/InputValidate';
import { Dashboard } from './Pages/Dashboard';


function App() {


  

  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signup" element={<SignUp />} />
          <Route path="/user/dashboard" element={<Dashboard/>} />
      </Routes>
      
    </div>
  );
}

export default App;

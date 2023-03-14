
import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import EmployerLogin from './pages/employerLogin';
import EmployerSignup from './pages/employerSignup';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar/>
          <div className='container'>
            <Routes>
              <Route path='employer-login' element= {<EmployerLogin/>}/>
              <Route path='employer-signup' element= {<EmployerSignup email="email@email.com"/>}/>
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;

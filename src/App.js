import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Base from './components/Base';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import VotingCategories from './pages/VotingCategories';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Base/>}>
          <Route index element={<HomePage/>}/>
          <Route path='categories' element={<VotingCategories/>}/>
        </Route>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

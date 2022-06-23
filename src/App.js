import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import UserContext from './UserContext';
import Base from './components/Base';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import VotingCategories from './pages/VotingCategories';
import About from './pages/About';
import PastWinners from './pages/PastWinners';
import FutureEditions from './pages/FutureEditions';
import Donate from './pages/Donate';
import VotePage from './pages/VotePage';

function App() {
  const [user, setUser] = useState('')
  return (
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Base/>}>
            <Route index element={<HomePage/>}/>
            <Route path='categories' element={<VotingCategories/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='past' element={<PastWinners/>}/>
            <Route path='future' element={<FutureEditions/>}/>
            <Route path='donate' element={<Donate/>}/>
            <Route path='vote' element={<VotePage/>}/>
          </Route>
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

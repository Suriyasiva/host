import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/User';



function Host() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/users' element={<Users />} />
      <Route path='/user/:userId' element={<User />} />
    </Routes>
  );
}

export default Host;

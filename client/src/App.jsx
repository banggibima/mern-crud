import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import UserList from './pages/User/List';
import UserAdd from './pages/User/Add';
import UserInfo from './pages/User/Info';
import UserEdit from './pages/User/Edit';
import About from './pages/About';
import Error from './pages/Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/user/add" element={<UserAdd />} />
          <Route path="/user/info/:id" element={<UserInfo />} />
          <Route path="/user/edit/:id" element={<UserEdit />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

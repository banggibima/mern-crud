import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import FormAddUser from '../../components/Form/Add/User';
import Footer from '../../components/Footer';

function UserAdd() {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    mobile: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'User';
  });

  const postUser = async () => {
    try {
      await axios.post(`http://localhost:5000/api/users`, user);
      navigate('/user');
    } catch (err) {
      throw err;
    }
  };

  async function handleChange(e) {
    try {
      setUser({ ...user, [e.target.name]: e.target.value });
    } catch (err) {
      throw err;
    }
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      postUser();
    } catch (err) {
      throw err;
    }
  }
  return (
    <>
      <Navbar />
      <Header title="Add User" />
      <main>
        <div className="max-w-3xl mx-auto">
          <div className="py-4 px-4 sm:px-4 md:px-4 lg:px-4">
            <div className="sm:flex-none space-x-2">
              <Link
                to={`/user`}
                className="inline-flex items-center justify-center px-2 py-1 rounded-lg border text-sm font-medium hover:text-zinc-600 hover:bg-zinc-100 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Back to List
              </Link>
            </div>
            <FormAddUser
              user={user}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default UserAdd;

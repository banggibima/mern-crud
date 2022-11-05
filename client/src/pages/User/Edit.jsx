import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import FormEditUser from '../../components/Form/Edit/User';
import Footer from '../../components/Footer';

function UserEdit() {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    mobile: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'User';
    getUser(id);
  }, [id]);

  async function getUser(id) {
    try {
      await axios
        .get(`http://localhost:5000/api/users/${id}`)
        .then((res) => setUser(res.data));
    } catch (err) {
      throw err;
    }
  }

  async function putUser(id) {
    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, user);
      navigate('/user');
    } catch (err) {
      throw err;
    }
  }

  function handleChange(e) {
    try {
      setUser({ ...user, [e.target.name]: e.target.value });
    } catch (err) {
      throw err;
    }
  }

  function handleSubmit(e) {
    try {
      e.preventDefault();
      putUser(id);
    } catch (err) {
      throw err;
    }
  }

  return (
    <>
      <Navbar />
      <Header title="Edit User" />
      <main>
        <div className="max-w-3xl mx-auto">
          <div className="py-4 px-4 sm:px-4 md:px-4 lg:px-4">
            <div className="sm:flex-none space-x-2">
              <Link
                to={`/user/info/${id}`}
                className="inline-flex items-center justify-center px-2 py-1 rounded-lg border text-sm font-medium hover:text-zinc-600 hover:bg-zinc-100 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Back to Info
              </Link>
            </div>
            <FormEditUser
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

export default UserEdit;

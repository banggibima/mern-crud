import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import TableUser from '../../components/Table/User';
import Footer from '../../components/Footer';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    document.title = 'User';
    getUsers();
  }, []);

  async function getUsers() {
    try {
      await axios
        .get(`http://localhost:5000/api/users`)
        .then((res) => setUsers(res.data));
    } catch (err) {
      throw err;
    }
  }

  async function deleteUser(id) {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      getUsers();
    } catch (err) {
      throw err;
    }
  }

  return (
    <>
      <Navbar />
      <Header title="List User" />
      <main>
        <div className="max-w-3xl mx-auto">
          <div className="py-4 px-4 sm:px-4 md:px-4 lg:px-4">
            <div className="sm:flex-none space-x-2">
              <Link
                to={`/user/add`}
                className="inline-flex items-center justify-center px-2 py-1 rounded-lg border text-sm font-medium hover:text-zinc-600 hover:bg-zinc-100 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Add
              </Link>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center justify-center px-2 py-1 rounded-lg border text-sm font-medium hover:text-zinc-600 hover:bg-zinc-100 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Print
              </button>
            </div>
            <TableUser users={users} deleteUser={deleteUser} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default UserList;

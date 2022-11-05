import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import CardUser from '../../components/Card/User';
import Footer from '../../components/Footer';

function UserInfo() {
  const [user, setUser] = useState({});

  const { id } = useParams();

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

  return (
    <>
      <Navbar />
      <Header title="Info User" />
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
              <Link
                to={`/user/edit/${id}`}
                className="inline-flex items-center justify-center px-2 py-1 rounded-lg border text-sm font-medium hover:text-zinc-600 hover:bg-zinc-100 focus:outline-none focus:ring-transparent sm:w-auto"
              >
                Edit
              </Link>
            </div>
            <CardUser user={user} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default UserInfo;

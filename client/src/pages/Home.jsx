import { useEffect } from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  useEffect(() => {
    document.title = 'Home';
  });

  return (
    <>
      <Navbar />
      <Header title="Home" />
      <Footer />
    </>
  );
}

export default Home;

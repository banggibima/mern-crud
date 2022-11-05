import { useEffect } from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  useEffect(() => {
    document.title = 'About';
  });

  return (
    <>
      <Navbar />
      <Header title="About" />
      <Footer />
    </>
  );
}

export default About;

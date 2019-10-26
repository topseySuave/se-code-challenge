import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import HomeContent from '../components/HomeContent';
import Footer from '../components/Footer';

const Home = () => {
  const [latest, setLatest] = useState({});

  useEffect(() => {
    fetch('https://xkcd.now.sh/?comic=latest')
      .then(res => res.json())
      .then(res => setLatest(res));
  }, []);

  return (
    <div className="app-container">
      <Header />
      <HomeContent latest={latest} />
      <Footer />
    </div>
  );
};

export default Home;

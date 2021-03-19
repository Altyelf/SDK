import React, { FC } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';

const Home: FC = () => {
  return (
    <section>
      <Header />
      <Main />
      <Footer />
    </section>
  );
};

export default Home;

import React from 'react';
 import Header from './Components/Header/Header';
import HomePage from './Components/Home/Home';
import Section from './Components/Section/Section';
import './globalStyle.css';
import Page from './Components/Page/Page';
import Blog from './Components/BlogPage/Blog';
import Footer from './Components/Footer/Footer';
import Review from './Components/Review/Review';
const App = () => {
  return (
    <>
    <Header />
    <HomePage  />
    <Section   />
    <Page />
     <Blog  />
     <Review />

     <Footer />

    </>
  )
}

export default App;

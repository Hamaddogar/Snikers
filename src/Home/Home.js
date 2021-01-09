import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer'
import Slider from '../Home/Header/Slider/slider'
function Home() {
  return(
    <div>
    <Header/>
     <Slider/>
    <Body/>
    <Footer/>
    </div>
  )
}
export default Home;


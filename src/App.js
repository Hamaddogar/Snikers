import React from 'react';
// imoprt main css file
import './index.css'
// custom components
import Home from '../src//Home/Home'
import White from './Home/Header/White/White'
import Tech from './Home/Header/Tech/Tech'
import Vintage from './Home/Header/Vintage/Vintage'
import Color from './Home/Header/Color/Color'
// extra components
import Drawer from './Home/Header/Drawer/Drawer'
import SignIn from './Home/Header/SignIn/SignIn'
import Dashboard from './Home/Header/Dashboard/Dashboard'
import Footer from './Home/Footer/Footer'
import FDetails from './Home/Body/CDetails/FDetails/FDetails'
// Detail cards
import CONVERSEDetail from '../src/Home/Body/CDetails/FDetails/CONVERSE'
 import GREATROYALE from '../src/Home/Body/CDetails/FDetails/GREATROYALE'
import { BrowserRouter, Route, Link } from "react-router-dom";


function App () {
    return(
        <BrowserRouter>
           <Route exact path="/" component={Home} />
           <Route path="/white" component={White} />
           <Route path="/tech" component={Tech} />
           <Route path="/vintage" component={Vintage} />
           <Route path="/color" component={Color} />
           <Route path="/menu" component={Drawer} />
           <Route path="/signIn" component={SignIn} />
           <Route path="/dashboard" component={Dashboard} />
           <Route path="/footer" component={Footer} />
           <Route path="/cDetails" component={FDetails} />
           {/* Detaill all Cards  */}
           <Route path="/CONVERSE" component={CONVERSEDetail} />
           <Route path="/GREATROYALE" component={GREATROYALE} />

        
          
        </BrowserRouter>  
    )
  }
export default App;

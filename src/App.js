import React from 'react';
import './App.css'
import Finance from './Finance/Finance';
import ListItem from './Finance/ListItem';
import Home from './Home/Home';
import Launch from './Launch/Launch';
import Mobile from './Mobile/Mobile';
import Navbar from './Navbar/Navbar';

const App = () => {
  return ( 
    <div className='container'>
      <Navbar/>
      <div>
        <Home/>
        <Finance/>
        <Launch/>
        <Mobile/>
        
      </div>
    </div>
   );
}
 
export default App;
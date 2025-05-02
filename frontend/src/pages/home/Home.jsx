import React from 'react';
import './Home.css';
import Slider from '../../components/slider/Slider';
import Random from '../../components/random/Random';
import ContactList from '../../components/contactList/ContactList';


const Home = () => {
return (
    <div className="home">
    
    <div className="slider"><Slider/></div>

      <div><Random/></div>
    
    </div>

  );
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import {Hero} from './Hero';
import BrowseRange from './BrowseRange';
import Products from './Products';
import RoomInspiration from './RoomInspiration';
import Instagram from './Instagram';
import Footer from './Footer';

const Home = () => {
    return (
      <div className="bg-white">
        <Hero />
        <BrowseRange />
        <Products />
        <RoomInspiration />
        <Instagram />
      </div>
    );
  };

export default Home;
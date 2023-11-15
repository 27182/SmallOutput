import Logo from './Logo'
import './App.css';
import MenuOnTop from './MenuOnTop';
import MenuOnRight from './MenuOnRight';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import SearchBar from './SearchBar';
import MobileMenu from './MobileMenu';
import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";




function App() {
  
  return (
    <div className="App">
      <div className='isMobile' style={{ display: 'flex' }}>
        <Logo />
        <MobileMenu className="primary-button">
          Toggle Menu
        </MobileMenu>
      </div>
      <MenuOnTop />
      <SearchBar />
      <Content1 />
      <MenuOnRight />
      <Content2 />
      <Content3 />
      <div className='outside' style={{ position: 'absolute', height: '200vh', width: '100vw', zIndex: '-1' }}>
      </div>
    </div>
  );
}

export default App;

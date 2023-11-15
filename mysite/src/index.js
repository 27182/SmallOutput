import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MenuProvider from "react-flexible-sliding-menu";
import Menu from "./Menu";
import { useContext, useState } from "react";
import { MenuContext } from "react-flexible-sliding-menu";



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
  <MenuProvider MenuComponent={Menu} direction="right">
    <App />
  </MenuProvider>
  </React.StrictMode>
);




import styled from "styled-components";
import btnimg from './menu.png';
import React, { useState } from "react";
import { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";

const MobileMenuBtn = styled.div`
    background-image: url(${btnimg});
    background-repeat: no-repeat;
    background-color: white;
    background-size: cover;
    height: 5.4em;
    width: 5.4em;
    border: none;

    @media screen and (min-width: 768px) {
        display: none;
        
    }
`;




function MobileMenu() {

    const { toggleMenu } = useContext(MenuContext);

    const toggle = () => {
        document.getElementsByClassName('outside')[0].style.zIndex = 1;
    }

    return(
            <MobileMenuBtn onClick={function() {toggleMenu();toggle()}}></MobileMenuBtn>

    );
}



export default MobileMenu;
import React, { useContext, useState } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import styled from "styled-components";
import btnimg from './menu.png';
import './Menu.css';


const MobileMenuBtn = styled.div`
    background-image: url(${btnimg});
    background-repeat: no-repeat;
    background-color: white;
    background-size: cover;
    height: 5.4em;
    width: 5.4em;
    border: none;
    z-index: 9999;

    @media screen and (min-width: 768px) {
        display: none;
        
    }
`;




function Menu() {
    const { closeMenu } = useContext(MenuContext);

    window.addEventListener('resize',function(){
        if(window.innerWidth >= 768){
          closeMenu();
        }
    
    })


    function outsider() {
        document.getElementsByClassName('outside')[0].style.zIndex = -1
    }

    document.getElementsByClassName('outside')[0].addEventListener('click', function(){
        closeMenu();
        outsider();
    });


    return (
        <div className="Menu" style={{ height:'100vh', border: 'none'}}>
            <MobileMenuBtn onClick={function () { closeMenu(); outsider(); }}></MobileMenuBtn>
            <ul className='MMT' style={{ listStyleType: 'none', border: "none", padding: 0, textAlign: 'center', lineHeight: '700%', height: '100%' }}>
                <li className='MML'>
                    Menu1
                </li>
                <li className='MML'>
                    Menu2
                </li>
                <li className='MML'>
                    Menu3
                </li>
                <li className='MML'>
                    Menu4
                </li>
                <li className='MML'>
                    Menu5
                </li>


            </ul>
        </div>
    );
}

export default Menu;

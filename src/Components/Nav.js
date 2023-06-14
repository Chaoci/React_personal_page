import React from 'react';
import styled from '@emotion/styled';
import Button from './UI/button';
import { ReactComponent as myLogo } from '../images/mylogo_transparent_white.svg';
import { ReactComponent as menu } from '../images/menu.svg'; 

const Navgation=styled.div`
    margin: 0 auto;
    background-color: #002B5B;
    height:100px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
const MyLogo = styled(myLogo)`
    width: 100%;
    height:100%;
    cursor:pointer;
`;

const Links = styled.div`
    display:flex;
`;
const Menu = styled(menu)`
    display:none;
    width: 50px;
    height: 50px;
    margin-right:35px;
    @media screen and (max-width: 768px){
        color:white;
        display:block;
    }
`;

const Nav=()=>{
    return(
        <Navgation>
            <div className="logo">
                <a href="#5"><MyLogo /></a>
            </div>
            <Links>
                <Button value="About Me" link="#1"/>
                <Button value="Projects" link="#2"/>
                <Button value="Contact" link="#3"/>
                <Menu />
            </Links>
        </Navgation>
    );
};


export default Nav;

import React, {useState} from 'react';
import styled from '@emotion/styled';
import Button from './UI/button';
import { ReactComponent as myLogo } from '../images/mylogo_transparent_white.svg';
import { ReactComponent as menu } from '../images/menu.svg'; 

const Navgation=styled.div`
    position:sticky;
    top:0;
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
const MenuMenu = styled.div`
    width: 100%;
    background-color: #002B5B;
    display:flex;
    flex-direction:column;
    a{
        color:white;
        font-size:1.5rem;
        text-align:center;
        padding:20px 15px;
    }
    a:hover{
        background-color:#8FE3CF;
        color:black;
    }
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
    const [showMenu, setShowMenu] = useState(false);
    const handleMenuClick = () => {
        setShowMenu(!showMenu); 
    };
    return(
    <>
        <Navgation>
            <div className="logo">
                <a href="#5"><MyLogo /></a>
            </div>
            <Links>
                <Button value="About Me" link="#1"/>
                <Button value="Projects" link="#2"/>
                <Button value="Contact" link="#3"/>
                <Menu onClick={handleMenuClick}/>
            </Links>
        </Navgation>
        {!showMenu &&
            <MenuMenu>
                <a href="#1">About Me</a>
                <a href="#2">Projects</a>
                <a href="#3">Contact</a>
            </MenuMenu>
        }
    </>
    );
};
export default Nav;

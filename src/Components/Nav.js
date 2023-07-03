import React, {useState} from 'react';
import styled from '@emotion/styled';
import Button from './UI/button';
import { ReactComponent as myLogo } from '../images/mylogo_transparent_white.svg';
import { ReactComponent as menu } from '../images/menu.svg'; 
import { ReactComponent as close } from '../images/close.svg'; 


const Navgation=styled.div`
    position:sticky;
    top:0;
    margin: 0 auto;
    background-color: #002B5B;
    height:100px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    z-index:10;
`;

const MyLogo = styled(myLogo)`
    width: 100%;
    height:100%;
    cursor:pointer;
`;
const MenuMenu = styled.div`
    display:none;
    @media screen and (max-width: 768px){
        display:block;
        position:absolute;
        top:100px;
        width: 100%;
        margin-top:-10px;
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
    }
`;
const Links = styled.div`
    display:flex;
    justify-content:space-between;
    ainer-align:center;
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
const Close = styled(close)`
    display:none;
    width: 50px;
    height: 50px;
    margin-right:35px;
    @media screen and (max-width: 768px){
        color:white;
        display:block;
    }
`;

const Logo = styled.div`
    display:flex;
    justify-content:center;
    aign-items:center;
`;

const Nav=()=>{

    const [showMenu, setShowMenu] = useState(false);
    const handleMenuClick = () => {
        setShowMenu(!showMenu); 
    };

    return(
        <Navgation>
            <Logo>
                <a href="#banner"><MyLogo /></a>
            </Logo>
            <Links>
                <Button value="About Me" link="#about"/>
                <Button value="Projects" link="#project"/>
                <Button value="Contact"  link="#contact"/>
                {!showMenu ? <Menu onClick={handleMenuClick}/>:
                <Close onClick={handleMenuClick}/>}
            </Links>
        {!showMenu ||
            <MenuMenu>
                <a href="#about" onClick={handleMenuClick}>About Me</a>
                <a href="#project" onClick={handleMenuClick}>Projects</a>
                <a href="#contact" onClick={handleMenuClick}>Contact</a>
            </MenuMenu>
        }
        </Navgation>
    );
};
export default Nav;

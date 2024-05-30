import React from "react";
import styled from "styled-components";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
import { FaHeart } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import LogoImage from "../Images/Logo.png";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";


const SideBar = ({ menuOpen, setMenuOpen,setDarkMode,darkMode}) => {
  const menuItems = [
    {
      link: "/dashboard",
      name: "Dashboard",
      icon: <HomeRoundedIcon />,
    },
    {
      link: "/search",
      name: "Search",
      icon: <SearchRoundedIcon />,
    },
    {
      link: "/favourites",
      name: "Favourites",
      icon: <FaHeart size= {20}/>,
    },
  ];
  const Button = [
    {
      fun: () => console.log('upload'),
      name: "Upload",
      icon: <FaCloudUploadAlt />,
    },
    {
      fun: () => setDarkMode(!darkMode),
      name: darkMode ? "Light Mode" : "Dark Mode",
      icon: darkMode ? <MdLightMode /> : <MdDarkMode/>,
    },
    {
      fun: () => console.log("Upload"),
      name: "LogOut",
      icon: <MdLogout />,
    } 
  ];
  const MenuContainer = styled.div`
    flex: 0.5;
    flex-direction: column;
    height: 100vh;
    display: flex;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    @media (max-width : 1100px){
      position : fixed;
      z-index : 1000;
      width : 100%;
      max-width : 250px;
      left : ${({ menuOpen }) => (setMenuOpen ? "0" : "-100%")};
      transition : 0.3s ease-in-out);
    }
  `;
  const Logo = styled.div`
    
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-weight: bold;
    font-size: 20px;
    margin: 16px 0px;
  `;
  const Close = styled.div`
    display: none;
    @media (max-width: 1100px) {
      display: block;
    };
  `;
  const Elements = styled.div`
    padding: 4px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration : none !important;
    justify-content: flex-start;
    gap: 12px;
    cursor: pointer;
    color: ${({ theme }) => theme.text_secondary};
    width: 82%;
    &:hover {
      background-color: ${({ theme }) => theme.text_secondary + 50};
    }
  `;
  const NavText = styled.div`
    padding: 12px 0px;
    text-decoration : none !important;
  `;
  const Image = styled.img`
    height: 40px;
  `;

  const Flex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding : 0px 12px
  `;
  
  const HR = styled.div`
    width : 100%;
    height : 1px;
    background-color: ${({ theme }) => theme.text_secondary + 50};
    margin : 10px 0px;

  `;

  return (
    <MenuContainer menuOpen = {menuOpen}>
      <Flex>
        <Logo>
          <Image src={LogoImage} />
          Podstream
        </Logo>
        <Close onClick={() => setMenuOpen(false)}>
          <CloseRounded/>
        </Close>
      </Flex>
      {menuItems.map((item) => (
        <Link to= {item.link}   style={{textDecoration : "none"}}>
          <Elements>
            {item.icon}
            <NavText>{item.name}</NavText>
          </Elements>
        </Link>
      ))}
      <HR />
      {Button.map((item) => (
          <Elements onClick = {item.fun}>
            {item.icon}
            <NavText>{item.name}</NavText>
          </Elements>
       
      ))}
    </MenuContainer>
  );
};

export default SideBar;

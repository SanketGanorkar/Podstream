import React from "react";
import styled from "styled-components";
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from "@mui/material";
import { IoIosMenu } from "react-icons/io";



const NavBar = ({setMenuOpen , menuOpen}) => {
  const NavbarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px 20px;
  align-items: center;
  box-sizing: border-box;
  color: ${({ theme }) => theme.text_primary};
  gap: 30px;
  background: ${({ theme }) => theme.bg}
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.7px);
-webkit-backdrop-filter: blur(5.7px);
@media (max-width: 768px) {
    padding: 16px;
  }
  `;

  const ButtonDiv = styled.div`
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 12px;
    width: 100%;
    max-width: 70px;
    padding: 8px 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    &:hover {
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.text_primary};
    }
  `;
  const IcoButton = styled(IconButton)`
    color: ${({ theme }) => theme.text_secondary} !important;
  `;
  return (
    <NavbarDiv>
      <IcoButton onClick={() => setMenuOpen(!menuOpen)}>
          <IoIosMenu />
      </IcoButton> 
      <ButtonDiv>
        <PersonIcon style={{ fontSize: "18px" }} />
        Login
      </ButtonDiv>
    </NavbarDiv>
  );
};

export default NavBar;

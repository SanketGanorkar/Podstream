import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import "./index.css";
import SideBar from "./components/SideBar.jsx";
import { BrowserRouter , Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DisplayPodcasts from "./pages/DisplayPodcast.jsx";
import PodcastDetails from "./pages/DisplayPodcast.jsx";
import Profile from "./pages/Profile.jsx";
import Favourites from "./pages/Favourite.jsx"
import Search from "./pages/Search.jsx";



const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bgLight};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

function App() {
  // hooks
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);
 
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          {menuOpen && (
            <SideBar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          )}
          <Frame>
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
              <Route path = "/" exact element = {<Dashboard/>}/>
              <Route path='/search' exact element={<Search />} />
              <Route path='/favourites' exact element={<Favourites />} />
              <Route path='/profile' exact element={<Profile />} />
              <Route path='/podcast/:id' exact element={<PodcastDetails />} />
              <Route path='/showpodcasts/:type' exact element={<DisplayPodcasts/>} />
            </Routes>
          </Frame>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

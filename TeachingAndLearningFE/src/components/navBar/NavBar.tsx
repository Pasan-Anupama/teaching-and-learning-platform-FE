import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import PeopleIcon from "@mui/icons-material/People";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { HiOutlineBars3 } from "react-icons/hi2";
import "../../assets/css/LandingPage.css";
import Logo from "../../assets/images/logos/Logo.webp";

import { useState } from "react";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon color="inherit" />,
    },
    {
      text: "About",
      icon: <InfoIcon color="info" />,
    },
    {
      text: "Service",
      icon: <MiscellaneousServicesIcon color="secondary" />,
    },
    {
      text: "Contact",
      icon: <ContactMailIcon color="inherit" />,
    },
    {
      text: "Community",
      icon: <PeopleIcon sx={{ color: "#43A047" }} />,
    },
    {
      text: "LogIn",
      icon: <LoginIcon sx={{ color: "blue" }} />,
    },
  ];
  return (
    <nav>
      <div className="logo-container">
        <img src={Logo} alt="T&L_LOGO" />
      </div>
      <div className="navbar-links-container">
        <a href="/">Home</a>
        <a href="">About</a>
        <a href="">Service</a>
        <a href="">Contact</a>
        <a href="">Community</a>
        <a href="">LogIn</a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClick={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>{item.icon}</ListItemButton>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default NavBar;

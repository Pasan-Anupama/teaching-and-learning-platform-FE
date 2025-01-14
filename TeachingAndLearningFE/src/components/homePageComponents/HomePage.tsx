import React from "react";
import "../../assets/css/LandingPage.css";
import NavBar from "../navBar/NavBar";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const INITIAL_FORM_PAGE = "initial-form";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-banner-container">
        <Button
          onClick={() => navigate(INITIAL_FORM_PAGE)}
          className="secondary-button  primary-button-hover"
        >
          Getting Started
        </Button>
      </div>
    </div>
  );
};

export default HomePage;

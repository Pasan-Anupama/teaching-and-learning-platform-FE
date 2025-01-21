import { Card, Col } from "react-bootstrap";
import learning from "./../assets/images/studentImages/learning.png";
import teacherIcon from "./../assets/images/teacherImages/teachersIcon.png";
import "../assets/css/FormPages.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";

const STUDENT_CREATION_FORM_PAGE = "/student/log-in/";
const TEACHER_CREATION_FORM_PAGE = "";

function InitialForm() {
  const navigate = useNavigate();

  const studentFormNavigate = () => {
    navigate(STUDENT_CREATION_FORM_PAGE);
  };

  const teacherFormNavigate = () => {
    navigate(TEACHER_CREATION_FORM_PAGE);
  };
  return (
    <div className="custom-background">
      <NavBar />
      <div className="text-container">
        <h2>Welcome To Online Teaching & Learning Platform</h2>
      </div>
      <div className="initial-form-container">
        <div className="login-option" onClick={() => studentFormNavigate()}>
          <img src={learning} alt="Student_Image" />
          <span>Student SignUp</span>
        </div>
        <div className="login-option" onClick={() => teacherFormNavigate()}>
          <img src={teacherIcon} alt="Teacher_Image" />
          <span>Teacher SignUp</span>
        </div>
      </div>
    </div>
  );
}

export default InitialForm;

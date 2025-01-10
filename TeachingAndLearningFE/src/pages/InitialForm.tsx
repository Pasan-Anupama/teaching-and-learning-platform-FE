import { Card, Col, Container, Form, Row } from "react-bootstrap";
import learning from "./../assets/images/studentImages/learning.png";
import teacherIcon from "./../assets/images/teacherImages/teachersIcon.png";

function InitialForm() {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: "24%",
          top: "25%",
          transform: "translate(-10%, -90%)", //Left and Up positions absolute to the screen dimensions(Not considering the div component)
          border: "5px double #388e3c",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h1>Online Teaching And Learning Platform</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          marginLeft: "425px",
        }}
      >
        <Col
          style={{
            marginRight: "20px",
            marginTop: "150px",
            border: "2px solid #1e3a8a",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <Card>
            <Card.Title style={{ marginLeft: "100px" }}>
              <h2>
                <b>Student</b>
              </h2>
            </Card.Title>
            <Card.Text style={{ marginLeft: "100px" }}>Student LogIn</Card.Text>
            <Card.Body>
              <img src={learning} alt="My Image" height={300} width={300} />
            </Card.Body>
          </Card>
        </Col>
        <Col
          style={{
            marginTop: "150px",
            border: "2px solid #607d8b",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <Card>
            <Card.Title style={{ marginLeft: "100px" }}>
              <h2>
                <b>Teacher</b>
              </h2>
            </Card.Title>
            <Card.Text style={{ marginLeft: "100px" }}>Teacher LogIn</Card.Text>
            <Card.Body>
              <img
                src={teacherIcon}
                alt="Teacher Icon"
                height={300}
                width={300}
              />
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default InitialForm;

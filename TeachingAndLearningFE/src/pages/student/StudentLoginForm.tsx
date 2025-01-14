import { Card, Form, Row, Col } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { StudentCreationType } from "../../types/student/StudentCreationType";
import { OnChangeText } from "../../validation/onChange/OnChanger";

const initialFormValues: StudentCreationType = {
  name: "",
  age: "",
  email: "",
  whatsappNumber: "",
  medium: null,
  eduLevel: null,
  alStream: null,
  olFirstCategory: null,
  olSecondcategory: null,
  olThirdCategiry: null,
  s3Key: "",
};

const StudentLoginForm = () => {
  const [formData, setFormData] =
    useState<StudentCreationType>(initialFormValues);

  console.log(formData); //Remove later

  return (
    <div>
      <Card className="text-center">
        <Card.Header>
          <Card.Title>
            <h2>Student Login Form</h2>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Form className="row g-3 pt-3" noValidate>
            <Row>
              <Col xs={12} sm={6} md={6}>
                <Form.Group>
                  <Form.Label className="form-label mt-4">
                    Name <span className="text-red">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    placeholder="Plsease Enter your Name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={OnChangeText(formData, setFormData)}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} sm={6} md={6}>
                <Form.Group>
                  <Form.Label>
                    Age <span className="text-red">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    placeholder="Please Enter the Age"
                    name="age"
                    value={formData.age}
                    onChange={OnChangeText(formData, setFormData)}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} sm={6} md={6}>
                <Form.Group>
                  <Form.Label>
                    E mail <span className="text-red">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    placeholder="Please Enter Email Address"
                    name="email"
                    value={formData.email}
                    onChange={OnChangeText(formData, setFormData)}
                  />
                </Form.Group>
              </Col>

              <Col xs={12} sm={6} md={6}>
                <Form.Group>
                  <Form.Label>WhatsApp Number</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    placeholder="Please Enter Your WhatsApp Number"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={OnChangeText(formData, setFormData)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StudentLoginForm;

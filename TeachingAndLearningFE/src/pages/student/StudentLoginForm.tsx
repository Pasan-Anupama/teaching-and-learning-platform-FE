import React from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { StudentCreationType } from "../../types/student/StudentCreationType";
import { OnChangeText } from "../../validation/onChange/OnChanger";
import "../../assets/css/FormPages.css";
import NavBar from "../../components/navBar/NavBar";
import Select from "react-select";
import {
  AlSubjectStream,
  EduLevel,
  LanguageMedium,
  OlFirstCategory,
  OlSecondCategory,
  OlThirdCategory,
} from "../../types/subjects/SubjectTypes";
import { AxiosError } from "axios";
import { Toaster, toast } from "sonner";
import axiosPrivate from "../../api/Axios";

const initialFormValues: StudentCreationType = {
  name: "",
  age: "",
  email: "",
  whatsappNumber: "",
  languageMedium: null,
  educationLevel: null,
  alStream: null,
  olFirstCategory: null,
  olSecondCategory: null,
  olThirdCategory: null,
  password: "",
  confirmPassword: "",
  s3Key: "",
};

interface LanguageMediumOption {
  label: string;
  value: LanguageMedium;
}

interface LevelOfEducationOption {
  label: string;
  value: EduLevel;
}

interface AlSubjectStreamOption {
  label: string;
  value: AlSubjectStream;
}

interface OlFirstCategoryOption {
  label: string;
  value: OlFirstCategory;
}

interface OlSecondcategoryOption {
  label: string;
  value: OlSecondCategory;
}

interface OlThirdCategiryOption {
  label: string;
  value: OlThirdCategory;
}

const languageMediumOptions: LanguageMediumOption[] = [
  { label: "Sinhala Medium", value: "SINHALA MEDIUM" },
  { label: "English Medium", value: "ENGLISH MEDIUM" },
  { label: "Tamil Medium", value: "TAMIL MEDIUM" },
];

const eduLevelOptions: LevelOfEducationOption[] = [
  { label: "Ordinary Level", value: "O/L" },
  { label: "Advanced Level", value: "A/L" },
];

const alSubjectOptions: AlSubjectStreamOption[] = [
  { label: "Physical Science Stream", value: "PHYSICAL SCIENCE STREAM" },
  { label: "Bio Science Stream", value: "BIO SCIENCE STREAM" },
  { label: "Commerce Stream", value: "COMMERCE STREAM" },
  { label: "Arts Stream", value: "ARTS STREAM" },
  { label: "Technology Stream", value: "TECHNOLOGY STREAM" },
];

const olFirstCategoryOptions: OlFirstCategoryOption[] = [
  {
    label: "Business & Accounting Studies",
    value: "BUSINESS & ACCOUNTING STUDIES",
  },
  { label: "Geography", value: "GEOGRAPHY" },
  { label: "Civic Education", value: "CIVIC EDUCATION" },
  { label: "Entrepreneurship Studies", value: "ENTREPRENEURSHIP STUDIES" },
  {
    label:
      "Second Language - Sinhala (For Students Whose Dominant Language Is Tamil)",
    value:
      "SECOND LANGUAGE - SINHALA (FOR STUDENTS WHOSE DOMINANT LANGUAGE IS TAMIL)",
  },
  {
    label:
      "Second Language - Tamil (For Students Whose Dominant Language Is Sinhala)",
    value:
      "SECOND LANGUAGE - TAMIL (FOR STUDENTS WHOSE DOMINANT LANGUAGE IS SINHALA)",
  },
  { label: "Pali Language", value: "PALI LANGUAGE" },
  { label: "Sanskrit Language", value: "SANSKRIT LANGUAGE" },
  { label: "French Language", value: "FRENCH LANGUAGE" },
  { label: "German Language", value: "GERMAN LANGUAGE" },
  { label: "Hindi Language", value: "HINDI LANGUAGE" },
  { label: "Japanese Language", value: "JAPANESE LANGUAGE" },
  { label: "Arabic Language", value: "ARABIC LANGUAGE" },
  { label: "Korean Language", value: "KOREAN LANGUAGE" },
  { label: "Chinese Language", value: "CHINESE LANGUAGE" },
  { label: "Russian Language", value: "RUSSIAN LANGUAGE" },
];

const olSecondCategoryOptions: OlSecondcategoryOption[] = [
  { label: "Eastern Music", value: "EASTERN MUSIC" },
  { label: "Western Music", value: "WESTERN MUSIC" },
  { label: "Carnatic Music", value: "CARNATIC MUSIC" },
  { label: "Eastern Dancing", value: "EASTERN DANCING" },
  { label: "Bharatha Dancing", value: "BHARATHA DANCING" },
  { label: "Art", value: "ART" },
  {
    label: "Appreciation of English Literary Texts (English Literature)",
    value: "APPRECIATION OF ENGLISH LITERARY TEXTS (ENGLISH LITERATURE)",
  },
  {
    label: "Appreciation of Sinhala Literary Texts (Sinhala Literature)",
    value: "APPRECIATION OF SINHALA LITERARY TEXTS (SINHALA LITERATURE)",
  },
  {
    label: "Appreciation of Tamil Literary Texts (Tamil Literature)",
    value: "APPRECIATION OF TAMIL LITERARY TEXTS (TAMIL LITERATURE)",
  },
  {
    label: "Appreciation of Arabic Literary Texts (Arabic Literature)",
    value: "APPRECIATION OF ARABIC LITERARY TEXTS (ARABIC LITERATURE)",
  },
  { label: "Drama and Theatre", value: "DRAMA AND THEATRE" },
];

const olThirdCategiryOptions: OlThirdCategiryOption[] = [
  {
    label: "Information & Communication Technology",
    value: "INFORMATION & COMMUNICATION TECHNOLOGY",
  },
  {
    label: "Agriculture & Food Technology",
    value: "AGRICULTURE & FOOD TECHNOLOGY",
  },
  {
    label: "Aquatic Bio Resources Technology",
    value: "AQUATIC BIO RESOURCES TECHNOLOGY",
  },
  { label: "Arts & Crafts", value: "ARTS & CRAFTS" },
  { label: "Home Economics", value: "HOME ECONOMICS" },
  {
    label: "Health & Physical Education",
    value: "HEALTH & PHYSICAL EDUCATION",
  },
  {
    label: "Communication & Media Studies",
    value: "COMMUNICATION & MEDIA STUDIES",
  },
  {
    label: "Design & Construction Technology",
    value: "DESIGN & CONSTRUCTION TECHNOLOGY",
  },
  {
    label: "Design & Mechanical Technology",
    value: "DESIGN & MECHANICAL TECHNOLOGY",
  },
  {
    label: "Design, Electrical & Electronic Technology",
    value: "DESIGN, ELECTRICAL & ELECTRONIC TECHNOLOGY",
  },
  {
    label: "Electronic Writing & Shorthand",
    value: "ELECTRONIC WRITING & SHORTHAND",
  },
];

const STUDENT_DETAILS_ADD_URL = "/student/create";

const StudentLoginForm = () => {
  const axios = axiosPrivate;
  const [formData, setFormData] =
    useState<StudentCreationType>(initialFormValues);

  const handleSubmit = async () => {
    if (formData.password === formData.confirmPassword) {
      try {
        await axios.post(STUDENT_DETAILS_ADD_URL, formData);
        toast.success("Student Data added successfully !");
      } catch (error: unknown) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const status = axiosError.response.status;

          if (status === 400 || status === 404) {
            toast.error("No Server Response !");
          } else if (status === 500) {
            toast.error("Internal Server Error: Please try again later!");
          }
        } else {
          toast.error("Network Error: Please check your internet connection!");
        }
      }
    } else {
      toast.error("Password and ConformPassword are not Matching !");
    }
  };

  const handleReset = () => {
    setFormData(initialFormValues);
  };

  return (
    <>
      <div className="custom-background">
        <NavBar />
        <Toaster richColors />;
        <Card className="initial-form-container">
          <Card.Header>
            <Card.Title>
              <h2>Student Sign Up Form</h2>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Form noValidate>
              <Row>
                <Col xs={12} sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>
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

                <Col xs={12} sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>Medium Of Education</Form.Label>
                    <Select
                      className="form-select"
                      placeholder="Please Select Language Medium"
                      options={languageMediumOptions}
                      value={languageMediumOptions.find(
                        (option) => option.value === formData.languageMedium
                      )}
                      onChange={(selectedOption) =>
                        setFormData({
                          ...formData,
                          languageMedium: selectedOption?.value || null,
                        })
                      }
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>Level Of Education</Form.Label>
                    <Select
                      className="form-select"
                      placeholder="Please Select Level of Education"
                      options={eduLevelOptions}
                      value={eduLevelOptions.find(
                        (option) => option.value === formData.educationLevel
                      )}
                      onChange={(selectedOption) =>
                        setFormData({
                          ...formData,
                          educationLevel: selectedOption?.value || null,
                        })
                      }
                    />
                  </Form.Group>
                </Col>

                {formData.educationLevel === "A/L" ? (
                  <Col xs={12} sm={6} md={6}>
                    <Form.Group>
                      <Form.Label>Subject Stream</Form.Label>
                      <Select
                        className="form-select"
                        placeholder="Please Select Subject Stream"
                        options={alSubjectOptions}
                        value={alSubjectOptions.find(
                          (option) => option.value === formData.alStream
                        )}
                        onChange={(selectedOption) =>
                          setFormData({
                            ...formData,
                            alStream: selectedOption?.value || null,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                ) : null}

                {formData.educationLevel === "O/L" ? (
                  <>
                    <Col xs={12} sm={6} md={6}>
                      <Form.Group>
                        <Form.Label>Subject Category I</Form.Label>
                        <Select
                          className="form-select"
                          placeholder="Please Select the First category Subject"
                          options={olFirstCategoryOptions}
                          value={olFirstCategoryOptions.find(
                            (option) =>
                              option.value === formData.olFirstCategory
                          )}
                          onChange={(selectedOption) =>
                            setFormData({
                              ...formData,
                              olFirstCategory: selectedOption?.value || null,
                            })
                          }
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12} sm={6} md={6}>
                      <Form.Group>
                        <Form.Label>Subject Category II</Form.Label>
                        <Select
                          className="form-select"
                          placeholder="Please Select the Second Category Subject"
                          options={olSecondCategoryOptions}
                          value={olSecondCategoryOptions.find(
                            (option) =>
                              option.value === formData.olSecondCategory
                          )}
                          onChange={(selectedOption) =>
                            setFormData({
                              ...formData,
                              olSecondCategory: selectedOption?.value || null,
                            })
                          }
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12} sm={6} md={6}>
                      <Form.Group>
                        <Form.Label>Subject Category III</Form.Label>
                        <Select
                          className="form-select"
                          placeholder="Please Select the Third Category Subject"
                          options={olThirdCategiryOptions}
                          value={olThirdCategiryOptions.find(
                            (option) =>
                              option.value === formData.olThirdCategory
                          )}
                          onChange={(selectedOption) =>
                            setFormData({
                              ...formData,
                              olThirdCategory: selectedOption?.value || null,
                            })
                          }
                        />
                      </Form.Group>
                    </Col>
                  </>
                ) : null}

                <Col xs={12} sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>
                      Password <span className="text-red">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Plsease Enter a Password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={OnChangeText(formData, setFormData)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>
                      Confirm Password <span className="text-red">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Plsease Confirm the Password"
                      name="confirmPassword"
                      required
                      value={formData.confirmPassword}
                      onChange={OnChangeText(formData, setFormData)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <div className="button-placing">
          <Button className="submit-button" onClick={() => handleSubmit()}>
            Submit
          </Button>
          <Button className="reset-button" onClick={() => handleReset()}>
            Reset
          </Button>
        </div>
      </div>
    </>
  );
};

export default StudentLoginForm;

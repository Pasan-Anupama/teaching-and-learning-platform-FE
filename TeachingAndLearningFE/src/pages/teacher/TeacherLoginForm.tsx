import React, { useState } from "react";
import {
  TeacherCreationType,
  TeacherType,
} from "../../types/teacher/TeacherCreationType";
import {
  AlSubjectStream,
  ArtSubjects,
  BioScienceSubjects,
  CommerceSubjects,
  EduLevel,
  LanguageMedium,
  OlSubjcts,
  PhysicalScienceSubjects,
  TechnologySubjects,
} from "../../types/subjects/SubjectTypes";
import NavBar from "../../components/navBar/NavBar";
import { Toaster } from "sonner";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "../../assets/css/FormPages.css";
import { OnChangeText } from "../../validation/onChange/OnChanger";
import Select from "react-select";

const initialFormValues: TeacherCreationType = {
  name: "",
  age: null,
  nicNumber: "",
  whatsappNumber: "",
  teachetType: null,
  languageMedium: null,
  eduLevel: null,
  alSubjectStream: null,
  physicalScienceSubjects: null,
  bioScienceSubjects: null,
  commerceSubjects: null,
  artSubjects: null,
  technologySubjects: null,
  olSubjects: null,
  certificatesUpload: "",
};

interface TeacherTypeOption {
  label: string;
  value: TeacherType;
}

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

interface PhysicalScienceSubjectOption {
  label: string;
  value: PhysicalScienceSubjects;
}

interface BiologySubjectOption {
  label: string;
  value: BioScienceSubjects;
}

interface CommerceSubjectsOption {
  label: string;
  value: CommerceSubjects;
}

interface ArtSubjectOption {
  label: string;
  value: ArtSubjects;
}

interface TechnologySubjectOption {
  label: string;
  value: TechnologySubjects;
}

interface OlSubjectsOption {
  label: string;
  value: OlSubjcts;
}

const teacherTypeoptions: TeacherTypeOption[] = [
  { label: "Private Teacher", value: "PRIVATE TEACHER" },
  { label: "Schoool Teacher", value: "SCHOOL TEACHER" },
];

const languageMediumOptions: LanguageMediumOption[] = [
  { label: "Sinhala Medium", value: "SINHALA MEDIUM" },
  { label: "Engliosh Medium", value: "ENGLISH MEDIUM" },
  { label: "Tamil Medium", value: "TAMIL MEDIUM" },
];

const educationLevelOptions: LevelOfEducationOption[] = [
  { label: "A/L", value: "A/L" },
  { label: "O/L", value: "O/L" },
];

const alSubjectOptions: AlSubjectStreamOption[] = [
  { label: "Physical Science", value: "PHYSICAL SCIENCE STREAM" },
  { label: "Bio Science", value: "BIO SCIENCE STREAM" },
  { label: "Arts", value: "ARTS STREAM" },
  { label: "Commerce", value: "COMMERCE STREAM" },
  { label: "Technology", value: "TECHNOLOGY STREAM" },
];

const physicalScienceSubjectOptions: PhysicalScienceSubjectOption[] = [
  { label: "Physics", value: "PHYSICS" },
  { label: "Chemistry", value: "CHEMISTRY" },
  { label: "Pure Mathematics", value: "PURE MATHEMATICS" },
  { label: "Applied Mathematics", value: "APPLIED MATHEMATICS" },
];

const biologySubjectoptions: BiologySubjectOption[] = [
  { label: "Physics", value: "CHEMISTRY" },
  { label: "Chemistry", value: "CHEMISTRY" },
  { label: "Biology", value: "BIOLOGY" },
];

const technologySubjetOptions: TechnologySubjectOption[] = [
  { label: "Engineering Technology", value: "ENGINEERING TECHNOLOGY" },
  { label: "Science For technology", value: "SCIENCE FOR TECHNOLOGY" },
  { label: "Mathematics", value: "MATHEMATICS" },
  { label: "ICT", value: "ICT" },
  { label: "Bio System Technology", value: "BIO SYSTEMS TECHNOLOGY" },
  { label: "Agriculture", value: "AGRICULTURE" },
];

const artSubjectOptions: ArtSubjectOption[] = [
  { label: "Sinhala", value: "SINHALA" },
  { label: "Logic", value: "LOGIC" },
  { label: "Political Science", value: "POLITICAL SCIENCE" },
  { label: "Geography", value: "GEOGRAPHY" },
  { label: "Buddhist Civilization", value: "BUDDHIST CIVILIZATION" },
  { label: "English Literature", value: "ENGLISH LITERARTURE" },
  { label: "Japanese", value: "JAPANESE" },
  { label: "History", value: "HISTORY" },
  { label: "Drama", value: "DRAMA" },
];

const commerceSubjectOptions: CommerceSubjectsOption[] = [
  { label: "Businness Studies", value: "BUSINESS STUDIES" },
  { label: "Accounting", value: "ACCOUNTING" },
  { label: "Economics", value: "ECONOMICS" },
  { label: "ICT", value: "ICT" },
  { label: "Business Statistics", value: "BUSINESS STATISTICS" },
  { label: "English Literature", value: "ENGLISH LITERATURE" },
  { label: "Plotical Science", value: "POLITICAL SCIENCE" },
];

const olSubjectOptions: OlSubjectsOption[] = [
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
  { label: "Sinhala Language", value: "SINHALA LANGUAGE" },
  { label: "Tamil Language", value: "TAMIL LANGUAGE " },
  { label: "English Language", value: "ENGLISH LANGUAGE" },
  { label: "Mathematics", value: "MATHEMATICS" },
  { label: "Science", value: "SCIENCE" },
  { label: "Science", value: "SCIENCE" },
  { label: "History", value: "HISTORY" },
  { label: "Buddhism", value: "BUDDHISM" },
  { label: "Hinduism", value: "HINDUISM" },
  { label: "Islam", value: "ISLAM" },
  { label: "Christian", value: "CHRISTIANITY" },
];

const TEACHER_CREAION_URL = "";

const TeacherLoginForm = () => {
  const [formData, setFormData] =
    useState<TeacherCreationType>(initialFormValues);

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
              <h2>Teacher Sign Up Form</h2>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Form noValidate>
              <Row>
                <Col xs={12} sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Please Enter Your Name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={OnChangeText(formData, setFormData)}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      placeholder="Please Enter Your Age"
                      name="age"
                      required
                      value={formData.age || ""}
                      onChange={OnChangeText(formData, setFormData)}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>NIC Number</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Please Enter Your NIC Number"
                      name="nicNumber"
                      required
                      value={formData.nicNumber}
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
                      required
                      value={formData.whatsappNumber}
                      onChange={OnChangeText(formData, setFormData)}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>Teacher Type</Form.Label>
                    <Select
                      className="form-select"
                      placeholder="Please Select Teacher Type"
                      options={teacherTypeoptions}
                      value={teacherTypeoptions.find(
                        (option) => option.value === formData.teachetType
                      )}
                      onChange={(selectedOption) =>
                        setFormData({
                          ...formData,
                          teachetType: selectedOption?.value || null,
                        })
                      }
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>Meduim Of Teaching</Form.Label>
                    <Select
                      className="form-select"
                      placeholder="Please Select The Medium Of Teaching"
                      options={languageMediumOptions}
                      value={languageMediumOptions.find(
                        (option) => option.value === formData.languageMedium
                      )}
                      onChange={(selectedoption) =>
                        setFormData({
                          ...formData,
                          languageMedium: selectedoption?.value || null,
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
                      placeholder="Please Select Education Level"
                      options={educationLevelOptions}
                      value={educationLevelOptions.find(
                        (option) => option.value === formData.eduLevel
                      )}
                      onChange={(selectedOption) =>
                        setFormData({
                          ...formData,
                          eduLevel: selectedOption?.value || null,
                        })
                      }
                    />
                  </Form.Group>
                </Col>

                {formData.eduLevel === "A/L" ? (
                  <Col xs={12} sm={6} md={6}>
                    <Form.Group>
                      <Form.Label>Subject Stream</Form.Label>
                      <Select
                        className="form-select"
                        placeholder="Please Select A/L Subject Stream"
                        options={alSubjectOptions}
                        value={alSubjectOptions.find(
                          (Option) => Option.value === formData.alSubjectStream
                        )}
                        onChange={(selectedOption) =>
                          setFormData({
                            ...formData,
                            alSubjectStream: selectedOption?.value || null,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                ) : null}

                {formData.alSubjectStream === "PHYSICAL SCIENCE STREAM" ? (
                  <Col xs={12} sm={6} md={6}>
                    <Form.Group>
                      <Form.Label>Physical Science Subjects</Form.Label>
                      <Select
                        className="form-select"
                        placeholder="Please Select a Subject"
                        options={physicalScienceSubjectOptions}
                        value={physicalScienceSubjectOptions.find(
                          (Option) =>
                            Option.value === formData.physicalScienceSubjects
                        )}
                        onChange={(selectedOption) =>
                          setFormData({
                            ...formData,
                            physicalScienceSubjects:
                              selectedOption?.value || null,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                ) : null}

                {formData.alSubjectStream === "BIO SCIENCE STREAM" ? (
                  <Col xs={12} sm={6} md={6}>
                    <Form.Group>
                      <Form.Label>Bio Science Subjects</Form.Label>
                      <Select
                        className="form-select"
                        placeholder="Please Select a Subject"
                        options={biologySubjectoptions}
                        value={biologySubjectoptions.find(
                          (Option) =>
                            Option.value === formData.bioScienceSubjects
                        )}
                        onChange={(selectedOption) =>
                          setFormData({
                            ...formData,
                            bioScienceSubjects: selectedOption?.value || null,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                ) : null}

                {formData.alSubjectStream === "TECHNOLOGY STREAM" ? (
                  <Col xs={12} sm={6} md={6}>
                    <Form.Group>
                      <Form.Label>Technology Subjects</Form.Label>
                      <Select
                        className="form-select"
                        placeholder="Please Select a Subject"
                        options={technologySubjetOptions}
                        value={technologySubjetOptions.find(
                          (Option) =>
                            Option.value === formData.technologySubjects
                        )}
                        onChange={(selectedOption) =>
                          setFormData({
                            ...formData,
                            technologySubjects: selectedOption?.value || null,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                ) : null}

                {formData.alSubjectStream === "COMMERCE STREAM" ? (
                  <Col xs={12} sm={6} md={6}>
                    <Form.Group>
                      <Form.Label>Commerce Subjects</Form.Label>
                      <Select
                        className="form-select"
                        placeholder="Please Select a Subject"
                        options={commerceSubjectOptions}
                        value={commerceSubjectOptions.find(
                          (Option) => Option.value === formData.commerceSubjects
                        )}
                        onChange={(selectedOption) =>
                          setFormData({
                            ...formData,
                            commerceSubjects: selectedOption?.value || null,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                ) : null}

                {formData.alSubjectStream === "ARTS STREAM" ? (
                  <Col xs={12} sm={6} md={6}>
                    <Form.Group>
                      <Form.Label>Arts Subjects</Form.Label>
                      <Select
                        className="form-select"
                        placeholder="Please Select a Subject"
                        options={artSubjectOptions}
                        value={artSubjectOptions.find(
                          (Option) => Option.value === formData.artSubjects
                        )}
                        onChange={(selectedOption) =>
                          setFormData({
                            ...formData,
                            artSubjects: selectedOption?.value || null,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                ) : null}

                {formData.eduLevel === "O/L" ? (
                  <Col xs={12} sm={6} md={6}>
                    <Form.Group>
                      <Form.Label>Ordinary Level Subjects</Form.Label>
                      <Select
                        className="Please Select The Subject"
                        options={olSubjectOptions}
                        value={olSubjectOptions.find(
                          (option) => option.value === formData.olSubjects
                        )}
                        onChange={(selectedOption) =>
                          setFormData({
                            ...formData,
                            olSubjects: selectedOption?.value || null,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                ) : null}
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <div className="button-placing">
          <Button className="submit-button">Send To Approval</Button>
          <Button className="reset-button" onClick={() => handleReset()}>
            Reset
          </Button>
        </div>
      </div>
    </>
  );
};

export default TeacherLoginForm;

import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import StudentLoginForm from "./pages/student/StudentLoginForm";
import TeacherLoginForm from "./pages/teacher/TeacherLoginForm";
import InitialForm from "./pages/InitialForm";

function Router() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="initial-form" element={<InitialForm />} />
        <Route path="student/log-in" element={<StudentLoginForm />} />
        <Route path="teacher/log-in" element={<TeacherLoginForm />}/>
      </Routes>
    </>
  );
}

export default Router;

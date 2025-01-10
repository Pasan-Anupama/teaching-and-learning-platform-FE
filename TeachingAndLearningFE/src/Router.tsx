import { Routes, Route } from "react-router-dom";
import InitialForm from "./pages/InitialForm";

function Router() {
  return (
    <>
      <Routes>
        <Route index element={<InitialForm />} />
      </Routes>
    </>
  );
}

export default Router;

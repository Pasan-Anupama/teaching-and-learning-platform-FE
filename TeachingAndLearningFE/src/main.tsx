import { Fragment } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RoutingApp from "./Router";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutingApp />} />
      </Routes>
    </BrowserRouter>
  </Fragment>
);

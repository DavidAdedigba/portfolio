
import { Routes,Route } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./Layout";
import ProjectDetailsPage from "./pages/ProjectDetails";

export default function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetailsPage />}/>
      </Route>
    </Routes>
  )
}
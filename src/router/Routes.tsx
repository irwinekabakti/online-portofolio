import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Interest from "../pages/Interest";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Awards from "../pages/Awards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills /> },
      { path: "interest", element: <Interest /> },
      { path: "education", element: <Education /> },
      { path: "experience", element: <Experience /> },
      { path: "awards", element: <Awards /> },
    ],
  },
]);

export default router;

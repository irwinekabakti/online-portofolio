import { FC } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routes";

const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

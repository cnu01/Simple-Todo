import { Route, Routes } from "react-router-dom";
import { Login } from "../Components/Login";


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
    </Routes>
  );
};

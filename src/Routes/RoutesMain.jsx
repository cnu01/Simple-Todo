import { Route, Routes } from "react-router-dom";
import { Login } from "../Components/Login";
import { Todo } from "../Components/Todo";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Todo />} />
    </Routes>
  );
};
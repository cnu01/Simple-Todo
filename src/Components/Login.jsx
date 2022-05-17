import react, { useState } from "react";
import { useDispatch } from "react-redux";
import { getLoginData } from "../Redux/auth/Actions";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = () => {
    console.log(email, password);
    dispatch(getLoginData({ email, password }));
  };

  return (
    <>
      <input
        placeholder="enter email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <input
        placeholder="enter passwword"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};


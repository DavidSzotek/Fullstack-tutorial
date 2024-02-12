import React, { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";

const Login = (props: { setName: (name: string) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const Submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const content = await response.json();

    setRedirect(true);
    props.setName(content.name);
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={Submit}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <input
        type="email"
        className="form-control"
        placeholder="name@example.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Login;

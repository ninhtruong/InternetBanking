import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
    }
  });

  return (
    <div>
      <button onClick={() => navigate("/login")}>Navigate</button>
    </div>
  );
}

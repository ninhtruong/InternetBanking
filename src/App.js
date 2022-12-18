import { BrowserRouter, Route, Routes } from "react-router-dom";
import BeneficiaryList from "./Pages/BeneficiaryList";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import { useEffect } from "react";
import axios from "axios";
import SignIn from "./Pages/Login";

function App() {
  useEffect(() => {
    const api = async () => {
      try {
        let res = await axios.post(`${process.env.REACT_APP_BE}/users/login`, {
          user_name: "long",
          pass: "longbmt1",
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    api();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="beneficiary-list" element={<BeneficiaryList />} />
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

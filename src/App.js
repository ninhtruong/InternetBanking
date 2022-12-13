import { BrowserRouter, Route, Routes } from "react-router-dom";
import BeneficiaryList from "./Pages/BeneficiaryList";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="beneficiary-list" element={<BeneficiaryList />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

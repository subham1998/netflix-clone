import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;

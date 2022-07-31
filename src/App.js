import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<LogIn></LogIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account></Account>
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainDashboard from "./pages/MainDashboard";
import FarmAnalytics from "./pages/maincomponents/FarmAnalytics";
import LiveStock from "./pages/maincomponents/LiveStock";
import Dashboard from "./pages/maincomponents/Dashboard";
import Error from "./pages/maincomponents/Error";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/dashboard" element={<MainDashboard />}>
            <Route path="farm-analytics" element={<FarmAnalytics />} />
            <Route path="live-stock" element={<LiveStock />} />
            <Route index element={<Dashboard />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

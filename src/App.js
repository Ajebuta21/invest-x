import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import AboutUs from "./pages/guest/AboutUs"
import CryptoTrading from "./pages/guest/CryptoTrading";
import RealEstate from "./pages/guest/RealEstate";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Plans from "./pages/Dashboard/Plans";
import Profile from "./pages/Dashboard/Profile";
import UpdateProfile from "./pages/Dashboard/UpdateProfile";
import SinglePlan from "./pages/Dashboard/SinglePlan";
import AllTransactions from "./pages/admin/AllTransactions";
import SingleTransaction from "./pages/admin/SingleTransaction";
import AllUsers from "./pages/admin/AllUsers";
import CalcPage from "./pages/Dashboard/CalcPage";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomeLayout>
            <Home />
          </HomeLayout>
        }
      />
      <Route
        path="/login"
        element={
          <HomeLayout>
            <Login />
          </HomeLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <HomeLayout>
            <Signup />
          </HomeLayout>
        }
      />
      <Route
        path="/about"
        element={
          <HomeLayout>
            <AboutUs/>
          </HomeLayout>
        }
      />
      <Route
        path="/crypto-trading"
        element={
          <HomeLayout>
            <CryptoTrading/>
          </HomeLayout>
        }
      />
      <Route
        path="/real-estate"
        element={
          <HomeLayout>
            <RealEstate/>
          </HomeLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <DashboardLayout><Dashboard/></DashboardLayout>
        }
      />
      <Route
        path="/plans"
        element={
          <DashboardLayout><Plans/></DashboardLayout>
        }
      />
      <Route
        path="/plan/plan"
        element={
          <DashboardLayout><SinglePlan/></DashboardLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <DashboardLayout><Profile/></DashboardLayout>
        }
      />
      <Route
        path="/profile/edit"
        element={
          <DashboardLayout><UpdateProfile/></DashboardLayout>
        }
      />
      <Route
        path="/all-transactions"
        element={
          <DashboardLayout><AllTransactions/></DashboardLayout>
        }
      />
      <Route
        path="/transactions/transaction"
        element={
          <DashboardLayout><SingleTransaction/></DashboardLayout>
        }
      />
      <Route
        path="/all-site-users"
        element={
          <DashboardLayout><AllUsers/></DashboardLayout>
        }
      />
      <Route
        path="/calculator"
        element={
          <DashboardLayout><CalcPage/></DashboardLayout>
        }
      />
    </Routes>
  );
};

export default App;

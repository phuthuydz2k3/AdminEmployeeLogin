import './App.css';
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import HomePageAdmin from "./Components/HomePageAdmin";
import HomePageEmployee from "./Components/HomePageEmployee";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/homeAdmin" element={<HomePageAdmin />} />
                <Route path="/homeEmployee" element={<HomePageEmployee />} />
            </Routes>
        </Router>
    );
};

export default App;

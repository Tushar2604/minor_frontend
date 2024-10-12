import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import ParcelDetails from './components/ParcelDetails';
import TrainSearch from './components/TrainSearch';
import TicketUpload from './components/TicketUpload';
import BankInfo from './components/BankInfo';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/parcel-details" element={<ParcelDetails />} />
                <Route path="/train-search" element={<TrainSearch />} />
                <Route path="/ticket-upload" element={<TicketUpload />} />
                <Route path="/bank-info" element={<BankInfo />} />
            </Routes>
        </Router>
    );
}

export default App;

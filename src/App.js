import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import TicketUpload from './components/TicketUpload';
import TrainSearch from './components/TrainSearch';
import BankForm from './components/BankForm';
import Home from './components/Home';
import Notification from './components/Notification';
import LocationTracker from './components/LocationTracker';
import TravelerProfile from './components/TravelerProfile';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ticket-upload" element={<TicketUpload />} />
            <Route path="/traveler-profile" element={<TravelerProfile />} />
            <Route path="/train-search" element={<TrainSearch />} />
            <Route path="/bank-info" element={<BankForm />} />
            <Route path="/location-tracker" element={<LocationTracker />} />
            <Route path="/notification" element={<Notification />} />
        </Routes>
    </Router>
);

export default App;


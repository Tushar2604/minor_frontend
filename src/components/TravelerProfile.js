// TravelerProfile.js
import React, { useState } from 'react';
import './TravelerProfile.css';

const TravelerProfile = () => {
    const [travelerInfo, setTravelerInfo] = useState({
        name: '',
        departure: '',
        destination: '',
        travelDate: '',
    });
    const [showInfo, setShowInfo] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTravelerInfo({ ...travelerInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowInfo(true);
    };

    return (
        <div className="profile-container">
            <h2 className="profile-header">Traveler Profile</h2>
            <form className="profile-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={travelerInfo.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="departure">Departure</label>
                <input
                    type="text"
                    id="departure"
                    name="departure"
                    value={travelerInfo.departure}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="destination">Destination</label>
                <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={travelerInfo.destination}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="travelDate">Date of Travel</label>
                <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    value={travelerInfo.travelDate}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Save Profile</button>
            </form>

            {showInfo && (
                <div className="profile-info">
                    <h3>Travel Details</h3>
                    <p><strong>Name:</strong> {travelerInfo.name}</p>
                    <p><strong>Departure:</strong> {travelerInfo.departure}</p>
                    <p><strong>Destination:</strong> {travelerInfo.destination}</p>
                    <p><strong>Date of Travel:</strong> {new Date(travelerInfo.travelDate).toLocaleDateString()}</p>
                </div>
            )}
        </div>
    );
};

export default TravelerProfile;

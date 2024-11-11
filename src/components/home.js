// home.js
import React, { useState } from 'react';
import './css/styles.css';

function Home() {
    const [activeSection, setActiveSection] = useState('home');

    const handleSectionChange = (sectionId) => {
        setActiveSection(sectionId);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted successfully! Redirecting to homepage...');
        setActiveSection('home');
    };

    return (
        <div className="app">
            {/* Sidebar */}
            <div className="sidebar">
                <h2>TrainCourier</h2>
                <ul>
                    <li><a href="#" onClick={() => handleSectionChange('home')}>Home</a></li>
                    <li><a href="#" onClick={() => handleSectionChange('sender')}>Sender of Parcel</a></li>
                    <li><a href="#" onClick={() => handleSectionChange('traveler')}>Traveler</a></li>
                </ul>
            </div>

            {/* Main Content Area */}
            <div className="container">
                <h2>Welcome to TrainCourier</h2>

                {/* Home Overview Section */}
                {activeSection === 'home' && (
                    <div className="form-section active">
                        <div className="overview">
                            <h3>How TrainCourier Works</h3>
                            <p>TrainCourier is an innovative platform that connects people who want to send parcels with travelers who are already taking the train. Whether you’re sending a small package or a large item, TrainCourier can help ensure your parcel reaches its destination swiftly and efficiently.</p>
                            <p><strong>For Parcel Senders:</strong> You can easily create a shipment by providing your parcel details, pickup, and delivery addresses. Our trusted network of verified travelers ensures your parcels reach their destination safely.</p>
                            <p><strong>For Travelers:</strong> As a verified traveler, you can offer to carry parcels along your journey. Simply enter your PNR number for verification, and you’ll see the available parcels you can carry.</p>
                            <p>Start by selecting your role from the sidebar: either as a <strong>Sender</strong> or a <strong>Traveler</strong>!</p>
                        </div>
                    </div>
                )}

                {/* Sender Form Section */}
                {activeSection === 'sender' && (
                    <div className="form-section active">
                        <h3>Parcel Sender Details</h3>
                        <form onSubmit={handleFormSubmit}>
                            <label htmlFor="sender-name">Your Name</label>
                            <input type="text" id="sender-name" name="sender-name" placeholder="Enter your name" required />

                            <label htmlFor="Phone-Number">Phone Number</label>
                            <input type="tel" id="Phone-Number" name="Phone-Number" pattern="[0-9]{10}" required />

                            <label htmlFor="parcel-weight">Weight</label>
                            <input type="text" id="parcel-weight" name="parcel-weight" placeholder="Enter Parcel Weight" required />

                            <label htmlFor="parcel-type">Parcel-Type</label>
                            <input type="text" id="parcel-type" name="parcel-type" placeholder="What Type Of Parcel Is It ?" required />

                            <button type="submit">Submit Parcel Details</button>
                        </form>
                    </div>
                )}

                {/* Traveler Form Section */}
                {activeSection === 'traveler' && (
                    <div className="form-section active">
                        <h3>Traveler PNR Verification</h3>
                        <form onSubmit={handleFormSubmit}>
                            <label htmlFor="traveler-name">Your Name</label>
                            <input type="text" id="traveler-name" name="traveler-name" placeholder="Enter your name (It should be same as your ticket name)" required />

                            <label htmlFor="pnrNumber">PNR Number</label>
                            <input type="number" id="pnrNumber" name="pnrNumber" required />

                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{10}" required />

                            <label htmlFor="aadharNumber">Aadhar Number</label>
                            <input type="number" id="aadharNumber" name="aadharNumber" pattern="[0-9]{12}" required />

                            <div className="disclaimer">
                                <strong>Disclaimer:</strong> We require your Aadhar number for identity verification and security purposes. Your information will be kept confidential and used solely for this purpose.
                            </div>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;

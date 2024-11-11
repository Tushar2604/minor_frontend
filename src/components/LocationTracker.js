// LocationTracker.js
import React, { useState } from 'react';
import '../location.css';

function LocationTracker() {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);

    const handleTrackLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    setError(null); // Reset any previous error
                },
                (error) => {
                    setError("Location access denied. Please enable location services.");
                }
            );
        } else {
            setError("Geolocation is not supported by your browser.");
        }
    };

    return (
        <div className="location-tracker">
            <h3>Location Tracker</h3>
            {location.latitude && location.longitude ? (
                <div className="location-info">
                    <p><strong>Latitude:</strong> {location.latitude}</p>
                    <p><strong>Longitude:</strong> {location.longitude}</p>
                </div>
            ) : (
                <p className="location-info">Click "Track Location" to get your current location.</p>
            )}
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleTrackLocation}>Track Location</button>
        </div>
    );
}

export default LocationTracker;

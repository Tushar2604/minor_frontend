import React from 'react';
import { useNavigate } from 'react-router-dom';

function ParcelDetails() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/train-search');
    }

    return (
        <div className="form-container">
            <h2>Parcel Details</h2>
            <form onSubmit={handleSubmit}>
                {/* Add parcel form fields */}
                <input type="submit" value="Submit Parcel Details" />
            </form>
        </div>
    );
}

export default ParcelDetails;

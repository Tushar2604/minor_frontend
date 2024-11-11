import React, { useState } from 'react';
import './styles.css';

const TrainSearch = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [trains, setTrains] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        // Mock data for example purposes
        setTrains([{ id: 1, name: 'Rajdhani Express' }, { id: 2, name: 'Shatabdi Express' }]);
    };

    return (
        <div className="form-container">
            <h2>Search Trains for Parcel Delivery</h2>
            <form onSubmit={handleSearch}>
                <input value={from} onChange={(e) => setFrom(e.target.value)} placeholder="From" required />
                <input value={to} onChange={(e) => setTo(e.target.value)} placeholder="To" required />
                <button type="submit">Search Trains</button>
            </form>
            {trains.map(train => (
                <div key={train.id} className="train">
                    <h3>{train.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default TrainSearch;

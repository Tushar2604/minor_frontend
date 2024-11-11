
import React, { useEffect } from 'react';
import './css/styles.css';

function Notification({ message, show, onClose }) {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(onClose, 3000); // Auto-hide after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    return (
        <div className={`notification ${show ? 'show' : ''}`}>
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default Notification;

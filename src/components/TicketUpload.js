import React, { useState } from 'react';
import './styles.css';

const TicketUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState({ text: '', type: '' });

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file && (file.type === 'application/pdf' || file.type === 'image/png')) {
            setMessage({ text: 'File uploaded successfully!', type: 'success' });
        } else {
            setMessage({ text: 'Please upload a PNG or PDF file.', type: 'error' });
        }
    };

    return (
        <div className="form-container">
            <h2>Upload Your Ticket</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} accept=".pdf, .png" required />
                <button type="submit">Upload</button>
                {message.text && <p className={message.type}>{message.text}</p>}
            </form>
        </div>
    );
};

export default TicketUpload;

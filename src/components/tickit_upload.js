import React from 'react';
import { useNavigate } from 'react-router-dom';

function TicketUpload() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/bank-info');
    }

    return (
        <div className="form-container">
            <h2>Upload Your Ticket</h2>
            <form id="ticketUploadForm" enctype="multipart/form-data">
                <label for="ticketFile">Please upload your ticket (PNG or PDF only, max 1GB):</label>
                <input type="file" id="ticketFile" accept=".png, .pdf" required>
                <button type="submit" class="upload-btn">Upload</button>
                <p class="error" id="errorMsg"></p>
                <p class="success" id="successMsg"></p>
            </form>
            <form onSubmit={handleSubmit}>
                <input type="submit" value="Upload Ticket" />
            </form>
        </div>
    );
}

export default TicketUpload;

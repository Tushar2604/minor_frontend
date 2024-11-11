import React, { useState } from 'react';
import './styles.css';

const BankForm = () => {
    const [formData, setFormData] = useState({
        accountHolder: '', bankName: '', accountNumber: '', ifscCode: '', branch: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Bank details submitted successfully!');
    };

    return (
        <div className="form-container">
            <h2>Bank Information Form</h2>
            <form onSubmit={handleSubmit}>
                <input name="accountHolder" placeholder="Account Holder's Name" value={formData.accountHolder} onChange={handleChange} required />
                <input name="bankName" placeholder="Bank Name" value={formData.bankName} onChange={handleChange} required />
                <input name="accountNumber" placeholder="Account Number" value={formData.accountNumber} onChange={handleChange} required />
                <input name="ifscCode" placeholder="IFSC Code" value={formData.ifscCode} onChange={handleChange} required />
                <input name="branch" placeholder="Branch Name" value={formData.branch} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BankForm;

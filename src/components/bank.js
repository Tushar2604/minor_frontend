import React from 'react';

function BankInfo() {
    return (
        <div className="form-container">
            <h2>Bank Information Form</h2>
            <form action="submit_bank_info.php" method="POST">
                <label for="accountHolder">Account Holder's Name</label>
                <input type="text" id="accountHolder" name="accountHolder" required>

                <label for="bankName">Bank Name</label>
                <input type="text" id="bankName" name="bankName" required>

                <label for="accountNumber">Account Number</label>
                <input type="number" id="accountNumber" name="accountNumber" required>

                <label for="ifscCode">IFSC Code</label>
                <input type="text" id="ifscCode" name="ifscCode" required>

                <label for="branch">Branch Name</label>
                <input type="text" id="branch" name="branch" required>

                <input type="submit" value="Submit">
            </form>
        </div>
    );
}

export default BankInfo;

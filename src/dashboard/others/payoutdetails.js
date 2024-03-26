import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Payoutdetails() {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [lsat, setlsat] = useState("");
    const [success, setSuccess] = useState("");
    const [file, setFile] = useState();
    const [isChanged, setIsChanged] = useState(false);
    const [initialUser, setInitialUser] = useState(""); // Added state to store initial user data
    const [error, setError] = useState('');

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${lsat}`,
        }
    };

    const [formData, setFormData] = useState({
        bankName: '',
        bankNumber: '',
        bankFullName: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (!localStorage.getItem("authUser")) {
                    navigate('/');
                    return;
                }
                const data = JSON.parse(localStorage.getItem("authUser"));
                setUser(data);
                setInitialUser(data);
                setlsat(localStorage.getItem("authUser"));

                const response = await axios.get(
                    // `http://localhost:3005/dashboard/get-account-details/${data._id}`,
                    `https://www.portal-sanieldanproperties-api.onrender.com/get-account-details/${data._id}`,
                     config);
                
                if (response.data) {
                    setFormData(response.data);
                } else {
                    console.log("no data");
                }
            } catch (error) {
                console.log('Error fetching user data:', error);
                // Handle error state or display error message to the user
            }
        };
  
        fetchUserData();
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                // `http://localhost:3005/dashboard/update-account-details/${user._id}`,
                `https://www.portal-sanieldanproperties-api.onrender.com/update-account-details/${user._id}`,
                formData, config);
            // Handle success (optional)
            console.log('Bank account details saved successfully');
            setSuccess("Bank account details saved successfully!");
            setTimeout(() => {
                setSuccess("");
            }, 5000);

        } catch (error) {
            // Handle error (optional)
            console.error('Error saving bank account details:', error);
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <div className="mt-12">
            {error && (
                <div
                    id="pop-up"
                    style={{ zIndex: 9999, borderTopWidth: "6px" }}
                    className="fixed border-red-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3"
                >
                    <h2 className="font-bold tracking-wider">Bank Details input Failed</h2>
                    <p className="text-sm text-left tracking-wider pt-1">{error}</p>
                </div>
            )}
            {success && (
                <div
                    id="pop-up"
                    style={{ zIndex: 9999, borderTopWidth: "6px" }}
                    className="fixed border-green-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3"
                >
                    <h2 className="font-bold tracking-wider">Bank Details updated successful</h2>
                    <p className="text-sm text-left tracking-wider pt-1">{success}</p>
                </div>
            )}

            <hr className="hrracctdetails"/>
            <div className="text-left mt-6 flex">
                <input type="text" placeholder="Pay me by Direct Deposit" readOnly className="p-2 rounded"/>
                <p className="mt-1.5 ml-2 dark:text-white">-----only option avaliable</p>
            </div>

            <p className="text-left mt-3 text-gray-600">Before we can pay you, we must have your Payment Information. Be sure that are properly submitted.</p>

            <div>
                <p className="text-left mt-7 text-xl dark:text-white">Bank Account details</p>
                <form onSubmit={handleSubmit}>
                    <div className="mt-5 flex-col text-left">
                        <label htmlFor="bankName" className="dark:text-white">Bank Name</label><br />
                        <input required="" type="text" name="bankName" value={formData.bankName} autoComplete="off" onChange={handleChange} className="input" />
                    </div>

                    <div className="mt-5 flex-col text-left">
                        <label htmlFor="bankNumber" className="dark:text-white">Account Number</label><br />
                        <input required="" type="text" name="bankNumber" value={formData.bankNumber} autoComplete="off" onChange={handleChange} className="input" />
                    </div>

                    <div className="mt-5 flex-col text-left">
                        <label htmlFor="bankFullName" className="dark:text-white">Your FullName</label><br />
                        <input required="" type="text" name="bankFullName" value={formData.bankFullName} autoComplete="off" onChange={handleChange} className="input" />
                    </div>

                    <div className="text-left mt-5 w-72">
                        <button type="submit" className="buttonn px-3">Add Account Details</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Payoutdetails;

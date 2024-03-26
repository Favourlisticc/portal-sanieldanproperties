import React, { useState, useEffect } from 'react';
import Chart from '../../Components/Chart/Chart';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import TableList from '../../Components/TableList/TableList';
import userPic from '../../Images/man2.jpg';
import './Detail.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detail() {
    const { userId } = useParams(); // Accessing the userId parameter from the URL
    const [User, setUser] = useState("");


    const [lsat, setlsat] = useState("");
    const [success, setSuccess] = useState("");

    const [isChanged, setIsChanged] = useState(false);
    const [initialUser, setInitialUser] = useState(""); // Added state to store initial user data
    const [error, setError] = useState('');


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(
                  // `http://localhost:3005/admin/users/${userId}`,
                  `https://www.portal-sanieldanproperties-api.onrender.com/admin/users/${userId}`,
                  ); // Adjust the API endpoint accordingly
                if (response.ok) {
                    const User = await response.json();
                    setUser(User);
                } else {
                    console.error('Failed to fetch user data:', response.status);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUser();
    }, [userId]); // Fetch data whenever userId changes

    console.log(User)

    const config = {
      headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${lsat}`,
      }}

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...User, [name]: value });
        setIsChanged(true); // Set isChanged to true when any change occurs

        console.log(User)
        // Check if the current value is different from the initial value
        if (value !== initialUser[name]) {
          setIsChanged(true); // If different, enable the button
        } else {

          setIsChanged(false); // If same, disable the button
        }
      };

    const updateUser = async () => {
      try {
        const updatedData = {
          balance: User.balance,
          totalrefferls: User.totalrefferls,
          paidreffers: User.paidreffers,
          unpaid: User.unpaid,
          totalpayouttrans: User.totalpayouttrans,
          totaltransactions: User.totaltransactions,
      };

          console.log(updatedData)
          await axios.put(
            // `http://localhost:3005/admin/update-user/${userId}`,
            `https://www.portal-sanieldanproperties-api.onrender.com/admin/update-user/${userId}`,
            updatedData, config);
          setInitialUser(User); // Update initialUser with the updated user data
          setIsChanged(false); // Reset isChanged to false after successful update
          // Show success message

          setSuccess(`${User.username} User data updated successfully!`);
          // Clear success message after 5 seconds
          setTimeout(() => {
              setSuccess("");
          }, 5000);
      } catch (error) {
          setError(error.response.data.error);
          console.log('Error updating user data:', error);
          // Handle error state or display error message to the user
          // Clear error message after 5 seconds
          setTimeout(() => {
              setError("");
          }, 5000);
      }
  };


    return (
        <div className="details">
            <div className="home_sidebar">
                <Sidebar />
            </div>

            <div className="detail_page_main">
                <Navbar />

                    <div className="pl-7 mt-2 flex mb-20 max-sm:flex-col">

                    {User && (
                        <div className="border p-3 shadow w-96">
                            <img src={User.image} alt="user" className="rounded " />

                            <div className="text-left">
                                <p className="flex justify-between py-2">FullName: <p className=''>{User.firstName} {User.lastName}</p> </p><hr />
                                <p className="flex justify-between py-2">Balance: <p> ₦ {User.balance}</p></p><hr />
                                <p className="flex justify-between py-2">Email: <p>{User.email}</p></p><hr />
                                <p className="flex justify-between py-2">Country: <p>{User.country}</p></p><hr />
                                <p className="flex justify-between py-2">PhoneNumber: <p>{User.phoneNumber}</p></p><hr />
                                <p className="flex justify-between py-2">TotalReferrels: <p>{User.totalrefferls}</p></p><hr />
                                <p className="flex justify-between py-2">PaidRefferals: <p> ₦ {User.paidreffers}</p></p><hr />
                                <p className="flex justify-between py-2">Unpaid: <p>₦ {User.unpaid}</p></p><hr />
                                <p className="flex justify-between py-2">TotalPayout: <p> ₦ {User.totalpayouttrans}</p></p><hr />

                                <p className="flex justify-between py-2">Total Transactions: <p>{User.totaltransactions}</p></p><hr />
                                <p className="flex justify-between py-2">Account Details:</p>
                                    <ul className='ml-3'>
                                        {User.acctdetails.map((detail, index) => (
                                            <li key={index}>
                                              <p className='flex justify-between py-2 '>BankName<p>{detail.bankName}</p></p><hr />
                                              <p className='flex justify-between py-2 '>Account Number<p>{detail.bankNumber}</p></p><hr />
                                              <p className='flex justify-between py-2'>Owerner FullName<p>{detail.bankFullName}</p></p><hr />
                                              </li>


                                        ))}
                                    </ul>
                            </div>
                        </div>
                    )}


                        <div className='w-2/3 p-3 border shadow ml-10 max-sm:w-96 max-sm:ml-0 max-sm:mt-3'>

                        {error && (
                            <div id="pop-up" style={{ zIndex: 9999, borderTopWidth: "6px" }} class="fixed border-red-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3">
                            <h2 class="font-bold tracking-wider">Profile Update Failed</h2>
                            <p class="text-sm text-left tracking-wider pt-1">{error}</p>
                            </div>
                        )}

            {success && (
                    <div
                    id="pop-up"
                    style={{ zIndex: 9999, borderTopWidth: "6px" }}
                    class="fixed  border-green-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3"
                    >
                    <h2 class="font-bold tracking-wider">Data updated successful</h2>
                    <p class="text-sm text-left tracking-wider pt-1">{success}</p>
                    </div>
                )}
           <h1 className="text-left mb-10 font-semibold text-xl dark:text-white">Edit {User.username} Account</h1>

           <div>
              <div className='flex justify-between max-sm:flex-col'>
                  <div class="mt-5 flex-col text-left">
                    <label for="balance" className="dark:text-white">Balance</label><br/>
                    <input required="" type="text" name="balance" class="input" value={User.balance} onChange={handleInputChange} />
                  </div>

                  <div class="mt-5 flex-col text-left">
                    <label for="totalrefferls" className="dark:text-white">Total Referrels</label><br/>
                    <input required="" type="text" name="totalrefferls" class="input" value={User.totalrefferls} onChange={handleInputChange} />

                  </div>
              </div>

              <div className='flex justify-between max-sm:flex-col'>
                <div class="mt-5 flex-col text-left">
                  <label for="paidreffers" className="dark:text-white">Paid Refferals</label><br/>
                  <input required="" type="text" name="paidreffers" class="input" value={User.paidreffers} onChange={handleInputChange} />

                </div>

                <div class="mt-5 flex-col text-left ">
                  <label for="unpaid" className="dark:text-white">UnPaid</label><br/>
                  <input required="" type="text" name="unpaid" class="input" value={User.unpaid} onChange={handleInputChange} />

                </div>
              </div>

              <div className='flex justify-between max-sm:flex-col'>
                <div class="mt-5 flex-col text-left">
                  <label for="totalpayouttrans" className="dark:text-white">Total Payout Transactions</label><br/>
                  <input required="" type="text" name="totalpayouttrans" class="input" value={User.totalpayouttrans} onChange={handleInputChange} />

                </div>

                <div class="mt-5 flex-col text-left">
                  <label for="totaltransactions" className="dark:text-white">Total Transactions</label><br/>
                  <input required="" type="text" name="totaltransactions" class="input" value={User.totaltransactions} onChange={handleInputChange} />
                </div>
              </div>


                {/* <div className="mt-5">
                 <div className="">
                 <img src={file} alt="profilepicture" className="w-26 h-20 rounded-md"value={user.image}/>
                 </div>
                  <div className="text-left mt-1">


                    <label for="img" >Select image:</label><br/>
                    <input type="file" onChange={handleChange} />

                    </div>
                </div> */}

                <div className="text-left">
                <button
                        className={`mt-5 py-2 px-4 rounded ${
                        isChanged ? "bg-blue-500 hover:bg-blue-700 text-white font-bold" : "bg-gray-300 text-gray-700"
                        }`}
                        disabled={!isChanged} // Disable button if no changes
                        onClick={updateUser}
                    >
                        Save Changes
                </button>
                </div>

           </div>

                        </div>
                    </div>

            </div>
        </div>
    );
}

export default Detail;

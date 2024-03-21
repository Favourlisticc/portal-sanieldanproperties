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
    const [userData, setUserData] = useState("");

    const [user, setUser] = useState("");

    const [success, setSuccess] = useState("");

    const [isChanged, setIsChanged] = useState(false);
    const [initialUser, setInitialUser] = useState(""); // Added state to store initial user data
    const [error, setError] = useState('');


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:3005/admin/users/${userId}`); // Adjust the API endpoint accordingly
                if (response.ok) {
                    const userData = await response.json();
                    setUserData(userData);
                } else {
                    console.error('Failed to fetch user data:', response.status);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [userId]); // Fetch data whenever userId changes

    console.log(userData)


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...userData, [name]: value });
        setIsChanged(true); // Set isChanged to true when any change occurs

        // Check if the current value is different from the initial value
        if (value !== initialUser[name]) {
          setIsChanged(true); // If different, enable the button
        } else {

          setIsChanged(false); // If same, disable the button
        }
      };

    const updateUser = async () => {
      try {
          const formData = new FormData();
          // Append user data to FormData
          formData.append("balance", userData.balance);
          formData.append("totalreferrels", userData.totalrefferls);
          formData.append("paidrefferals",userData.paidreffers);
          formData.append("unpaid", userData.unpaid);
          formData.append("totalpayout", userData.totalpayouttrans);
          formData.append("totaltransactions", userData.totaltransactions);

          console.log(formData)
          await axios.put(`http://localhost:3005/admin/update-user/${userId}`, formData);
          setInitialUser(userData); // Update initialUser with the updated user data
          setIsChanged(false); // Reset isChanged to false after successful update
          // Show success message
          setSuccess(`${userData.username} User data updated successfully!`);
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

                    <div className="pl-7 mt-2 flex mb-20">

                {userData && (
                        <div className="border p-3 shadow w-96">
                            <img src={userPic} alt="user" className="user_image" />

                            <div className="text-left">
                                <p className="flex justify-between">FullName: <p className=''>{userData.firstName} {userData.lastName}</p> </p>
                                <p className="flex justify-between">Balance: <p>{userData.balance}</p></p>
                                <p className="flex justify-between">Email: <p>{userData.email}</p></p>
                                <p className="flex justify-between">Country: <p>{userData.country}</p></p>
                                <p className="flex justify-between">PhoneNumber: <p>{userData.phoneNumber}</p></p>
                                <p className="flex justify-between">TotalReferrels: <p>{userData.totalrefferls}</p></p>
                                <p className="flex justify-between">PaidRefferals: <p>{userData.paidreffers}</p></p>
                                <p className="flex justify-between">Unpaid: <p>{userData.unpaid}</p></p>
                                <p className="flex justify-between">TotalPayout: <p>{userData.totalpayouttrans}</p></p>
                                <p className="flex justify-between">Toatl Referrals: <p>{userData.totalrefferls}</p></p>
                                <p className="flex justify-between">Toatl Transactions: <p>{userData.totaltransactions}</p></p>
                                <p className="flex justify-between">Account Details: <p>{userData.acctdetails}</p></p>
                            </div>
                        </div>
                        )}

                        <div className='w-1/2 p-3 border shadow ml-10'>

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
           <h1 className="text-left mb-10 font-semibold text-xl dark:text-white">Edit {userData.username} Account</h1>

           <div>
              <div class="mt-5 flex-col text-left">
                <label for="balance" className="dark:text-white">Balance</label><br/>
                <input required="" type="text" name="balance" class="input" value={userData.balance} onChange={handleInputChange} />
              </div>

              <div class="mt-5 flex-col text-left">
                <label for="totalreferrels" className="dark:text-white">Total Referrels</label><br/>
                <input required="" type="text" name="totalreferrels" class="input" value={userData.totalrefferls} onChange={handleInputChange} />

              </div>

              <div class="mt-5 flex-col text-left">
                <label for="paidrefferals" className="dark:text-white">Paid Refferals</label><br/>
                <input required="" type="text" name="paidrefferals" class="input" value={userData.paidreffers} onChange={handleInputChange} />

              </div>

              <div class="mt-5 flex-col text-left">
                <label for="unpaid" className="dark:text-white">UnPaid</label><br/>
                <input required="" type="text" name="unpaid" class="input" value={userData.unpaid} onChange={handleInputChange} />

              </div>

              <div class="mt-5 flex-col text-left">
                <label for="totalpayout" className="dark:text-white">Total Payout Transactions</label><br/>
                <input required="" type="text" name="totalpayout" class="input" value={userData.totalpayouttrans} onChange={handleInputChange} />

              </div>

              <div class="mt-5 flex-col text-left">
                <label for="totaltransactions" className="dark:text-white">Total Transactions</label><br/>
                <input required="" type="text" name="totaltransactions" class="input" value={userData.totaltransactions} onChange={handleInputChange} />
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

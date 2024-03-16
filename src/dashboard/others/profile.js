import { useState, useEffect } from "react";
import { Link, useNavigate, } from "react-router-dom"
import CountrySelect from "../../countryselect";
import axios from "axios";

function Profile() {
    const navigate =useNavigate()
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
      }}
  
  
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
        } catch (error) {
          console.log('Error fetching user data:', error);
          // Handle error state or display error message to the user
        }
      };

      fetchUserData();
    }, [navigate]);

    console.log(user, lsat)

    const logoutHandler = () => {

        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
        navigate("/");
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        setIsChanged(true); // Set isChanged to true when any change occurs
    
        // Check if the current value is different from the initial value
        if (value !== initialUser[name]) {
          setIsChanged(true); // If different, enable the button
        } else {

          setIsChanged(false); // If same, disable the button
        }
      };

      const handleChange = (e) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setFile(imageUrl);
        setIsChanged(true);
    };
    const updateUser = async () => {
      try {
          const formData = new FormData();
          // Append user data to FormData
          formData.append("email", user.email);
          formData.append("firstName", user.firstName);
          formData.append("lastName", user.lastName);
          formData.append("country", user.country);
          formData.append("phoneNumber", user.phoneNumber);
  
          await axios.put(`http://localhost:3001/dashboard/api/update-user/${user._id}`, formData, config);
          setInitialUser(user); // Update initialUser with the updated user data
          setIsChanged(false); // Reset isChanged to false after successful update
          // Show success message
          setSuccess("User data updated successfully!");
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


    return(
        <div className="mt-16">
            {error && (
                    <div
                    id="pop-up"
                    style={{ zIndex: 9999, borderTopWidth: "6px" }}
                    class="fixed border-red-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3"
                    >
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
           <h1 className="text-left mb-10 font-semibold text-xl dark:text-white">Edit Your Account</h1>

           <div>
              <div class="mt-5 flex-col text-left">
                <label for="email" className="dark:text-white">Email</label><br/>
                <input required="" type="email" name="email" class="input" value={user.email} onChange={handleInputChange} />

                </div>

                <div class="mt-5 flex-col text-left">
                <label for="firstName" className="dark:text-white">FirstName</label><br/>
                <input required="" type="text" name="firstName" value={user.firstName} class="input" onChange={handleInputChange} />

                </div>

                <div class="mt-5 flex-col text-left">
                <label for="lastName" className="dark:text-white">LastName</label><br/>
                <input required="" type="text" name="lastName" class="input" value={user.lastName} onChange={handleInputChange} />

                </div>

                <div class="mt-5 flex-col text-left">
                <label for="phoneNumber" className="dark:text-white">Phone Number</label><br/>
                <input required="" type="string" name="phoneNumber" class="input" value={user.phoneNumber} onChange={handleInputChange} />

                </div>

                <div class="mt-5 flex-col text-left">
                <select id="country" name="country" className="bg-white text-gray-800 mt-5 h-12 w-72 max-sm:w-72 rounded-md" value={user.country} onChange={handleInputChange} required>
                        {CountrySelect.map((country, index) => (
                            <option key={index} value={country}>
                            {country}
                            </option>
                        ))}
                </select>

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

                <div>
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
    )
}

export default Profile
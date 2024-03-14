import { useState, useEffect } from "react";
import { Link, useNavigate, } from "react-router-dom"
import CountrySelect from "../../countryselect";

function Profile() {
    const navigate =useNavigate()
    const [user, setUser] = useState("");
    const [lsat, setlsat] = useState("");
    const [success, setSuccess] = useState("");
    const [file, setFile] = useState();
    const [isChanged, setIsChanged] = useState(false);
    const [initialUser, setInitialUser] = useState(""); // Added state to store initial user data

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
  
  
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


    return(
        <div className="mt-16">
           <h1 className="text-left mb-10 font-semibold text-xl">Edit Your Account</h1>

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
                <select id="country" name="country" className="bg-white text-gray-800 mt-5 h-12 w-72 max-sm:w-72 rounded-md" value={user.country} onChange={handleInputChange} required>
                        {CountrySelect.map((country, index) => (
                            <option key={index} value={country}>
                            {country}
                            </option>
                        ))}
                </select>

                </div>

                <div className="mt-5">
                 <div className="">
                 <img src={file} alt="profilepicture" className="w-26 h-20 rounded-md"/>
                 </div>
                  <div className="text-left mt-1">


                    <label for="img" >Select image:</label><br/>
                    <input type="file" onChange={handleChange} />

                    </div>
                </div>

                <div>
                <button
            className={`mt-5 py-2 px-4 rounded ${
              isChanged ? "bg-blue-500 hover:bg-blue-700 text-white font-bold" : "bg-gray-300 text-gray-700"
            }`}
            disabled={!isChanged} // Disable button if no changes
          >
            Save Changes
          </button>
                </div>

           </div>
        </div>
    )
}

export default Profile
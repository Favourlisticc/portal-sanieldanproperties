import { useState, useEffect } from "react";
import { Link, useNavigate, } from "react-router-dom"
import CountrySelect from "../../countryselect";
import axios from "axios";
import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [lsat, setlsat] = useState("");
  const [success, setSuccess] = useState("");
  const [files, setFiles] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [initialUser, setInitialUser] = useState(""); 
  const [error, setError] = useState('');
  const [uploaded, setUploaded] = useState(0);
  
  const config = {
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${lsat}`,
      }
  };

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
      setIsChanged(true);
      if (value !== initialUser[name]) {
          setIsChanged(true);
      } else {
          setIsChanged(false);
      }
  };

  const handleChange = (e) => {
      const selectedFiles = e.target.files;
      let fileArray = [];
      
      for (let i = 0; i < selectedFiles.length; i++) {
          const file = selectedFiles[i];
          const imageUrl = URL.createObjectURL(file);
          fileArray.push({ file, url: imageUrl });
      }
      
      setFiles(fileArray);
      setIsChanged(true);
  };

  const upload = async (items) => {
      try {
          const promises = items.map(async (item, index) => {
              const storageRef = ref(storage, `/images/${user._id}`);
              await uploadBytes(storageRef, item.file);

              const url = await getDownloadURL(storageRef);
              console.log(`Upload #${index + 1} is now available at ${url}.`);
              const updatedUser = { ...user, image: url };
              await updateUserInDatabase(updatedUser);
          });

          await Promise.all(promises);
      } catch (error) {
          console.log(error);
      }
  }

  const updateUserInDatabase = async (updatedUser) => {
      try {
          const { email, firstName, lastName, country, phoneNumber, image } = updatedUser;
          const userData = { email, firstName, lastName, country, phoneNumber, image };

          await axios.put(
            // `http://localhost:3005/dashboard/api/update-user/${user._id}`,
            `https://www.portal-sanieldanproperties-api.onrender.com/update-user/${user._id}`,
            userData, config);
          setInitialUser(updatedUser);
          setIsChanged(false);
          setSuccess("User data updated successfully!");

          setTimeout(() => {
              setSuccess("");
          }, 5000);
      } catch (error) {
          setError(error.response.data.error);
          console.log('Error updating user data:', error);
          setTimeout(() => {
              setError("");
          }, 5000);
      }
  };

  const updateUser = async () => {
      try {
          if (files.length > 0) {
              upload(files);
          } else {
              updateUserInDatabase(user);
          }
      } catch (error) {
          setError(error.message);
          console.log('Error updating user data:', error);
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
                    <h2 class="font-bold tracking-wider">Data Updated</h2>
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

                <div className="mt-5">
                 <div className="">
                 {files.map((file, index) => (
                    <div key={index} className="">
                      <img src={file.url} alt={`profilepicture-${index}`} className="w-26 h-20 rounded-md" />
                    </div>
                  ))}
                 </div>
                  <div className="text-left mt-1">


                    <label for="img" >Select image:</label><br/>
                    <input type="file" onChange={handleChange} />

                    </div>
                </div>

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
    )
}

export default Profile
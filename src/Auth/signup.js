import { Link, useNavigate } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import CountrySelect from "../countryselect";
import axios from "axios";

function Signup () {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [success, setSuccess] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
      if (localStorage.getItem("authUser")) {
        navigate("/dashboard");
      }
    }, [navigate]);





    const registerHandler = async (e) => {
        e.preventDefault();



        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
    
        if (password !== confirmPassword) {
          setTimeout(() => {
            setPassword("");
            setConfirmPassword("");
            setError("");
          }, 5000);
          return setError("Passwords do not match");
        }
    
        try {
          const { data } = await axios.post(
            "http://localhost:3005/auth/signup",
            // "https://portal-sanieldanproperties-api.onrender.com/auth/signup",
            { username, email, firstName, lastName, country, password, phoneNumber },
            config
          );

          localStorage.setItem("authToken", data.Token);
          localStorage.setItem("authUser", JSON.stringify(data.user));


    
          setSuccess("Signup successful! You're being redirected to your Dashboard");

          setTimeout(() => {
            setEmail("");
            setUsername("");
            setPassword("");
            setFirstName("");
            setLastName("");
            setCountry("");
            setPhoneNumber("")
            setConfirmPassword("");
            navigate("/dashboard");
          }, 5000);
        } catch (error) {
          setError(error.response.data.error);
    
          setTimeout(() => {
          setPassword("");
          setConfirmPassword("");

          navigate("/signup");
        }, 5000);
    
        }
      };





    return(
        <div className="">
            <div className="background-image text-white ml-auto mr-auto max-sm:h-full">
                <div className="gg max-sm:h-ful">
                 <div>
                    <div className="flex text-5xl justify-center font-bold">
                    <h1 className="">New  </h1>
                    <h1 className=" text-red-500"> Here ?</h1>
                    </div>
                  <div className="flex justify-center my-3">
                    <p class="border-2 bg-white h-0 w-32 "></p>
                  </div>

                       <p className=" mx-80 mt-2 max-sm:mx-0 max-sm:pb-10">Sign up and discover great amount of opportunities. Any registration without a Referee is uncompleted and subject to removal. To ensure you enjoy all the features you deserve, we kindly ask you to reach out to your Referee and obtain your unique referral link. If you have done that ignore this.</p>


                 </div>
                </div>
            </div>

            {error && (
                    <div
                    id="pop-up"
                    style={{ zIndex: 9999, borderTopWidth: "6px" }}
                    class="fixed  border-red-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3"
                    >
                    <h2 class="font-bold tracking-wider">Account Setup</h2>
                    <p class="text-sm text-left tracking-wider pt-1">{error}</p>
                    </div>
                )}
                {success && (
                    <div
                    id="pop-up"
                    style={{ zIndex: 9999, borderTopWidth: "6px" }}
                    class="fixed  border-green-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3"
                    >
                    <h2 class="font-bold tracking-wider">Account Setup</h2>
                    <p class="text-sm text-left tracking-wider pt-1">{success}</p>
                    </div>
                )}

            <form onSubmit={registerHandler}>


            <div className="flex justify-center mt-16 mb-10">


                <div className="bg-white container mx-80 max-sm:mx-2 px-3 rounded-xl">
                    <h1 className="mt-5 text-red-600 text-4xl font-semibold ">Sign Up</h1>

                    <div className="group mt-5 flex justify-center ">
                        <svg class="icon left-16 max-sm:left-2" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24" fill="#0000"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" type="text" placeholder="*Username" name="username"  value={username}onChange={(e) => {setUsername(e.target.value);}} required />
                    </div>


                    <div className="group mt-5 flex justify-center">
                    <svg class="icon left-16 max-sm:left-2" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24" fill="none"><path d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z" stroke="red" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.996 11h.01M11.995 11h.01M7.995 11h.008" stroke="#FF8A65" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" name="email" type="email" placeholder="*Email" value={email} onChange={(e) => {setEmail(e.target.value);}} required/>
                    </div>


                    <div className="group mt-5 flex justify-center">
                    <svg class="icon left-16 max-sm:left-2" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="#FF8A65" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m19.21 15.74-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.41 22c0-3.87 3.85-7 8.59-7 1.04 0 2.04.15 2.97.43" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" name="firstName" type="text" placeholder="*First Name" value={firstName} onChange={(e) => {setFirstName(e.target.value);}} required />
                    </div>


                    <div className="group mt-5 flex justify-center">
                    <svg class="icon left-16 max-sm:left-2" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="#FF8A65" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m19.21 15.74-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.41 22c0-3.87 3.85-7 8.59-7 1.04 0 2.04.15 2.97.43" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" type="text" name="lastName" placeholder="*Last Name" value={lastName} onChange={(e) => {setLastName(e.target.value);}} required />
                    </div>

                    <div className="group mt-5 flex justify-center">
                    <svg class="icon left-16 max-sm:left-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z" stroke="#ff8a65" stroke-width="1.5" stroke-miterlimit="10"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" type="text" name="phoneNumber" placeholder="*Phone Number" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value);}} required />
                    </div>


                    <div className="group mt-5 flex justify-center">
                    <svg class="icon left-16 max-sm:left-2" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24" fill="none"><path d="M10.49 2.23 5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z" stroke="#FF8A65"stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 12.5v3" stroke="red" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" type="password" name="password" placeholder="*Password" value={password} onChange={(e) => {setPassword(e.target.value);}} required/>
                    </div>


                    <div className="group mt-5 flex justify-center">
                    <svg class="icon left-16 max-sm:left-2" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24" fill="none"><path d="M10.49 2.23 5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z" stroke="#FF8A65"stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 12.5v3" stroke="red" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" type="password" name="confirmPassword" placeholder="*Confirm Password" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value);}} required />


                    </div>


                    <div className="group mt-5 flex justify-center">


                     <select id="country" name="country" className="bg-gray-100 mt-5 h-10  max-sm:w-full" value={country} onChange={(e) => {setCountry(e.target.value);}} required>
                        {CountrySelect.map((country, index) => (
                            <option key={index} value={country}>
                            {country}
                            </option>
                        ))}
                    </select>
                    </div>



                    <div class="mt-5 float-right mr-14 max-sm:mr-2">
                        <input type="checkbox" name="rememberme"/>
                        <label for="rememberme" class="text-red-500 font-semibold">Rremember Me</label>
                    </div>

                    {error && <p className="text-red-500 mb-3 absolute" style={{zIndex: "999"}}>{error}</p>}


                    <div className="mt-20">
                        <button type="submit" id="deed1" className="bg-red-400 text-white w-72 h-10 rounded text-lg" >Register</button>
                    </div>

                    <div className="mt-10 mb-5">
                    <p>Have an account?
                     <Link to="/"  className="underline max-sm:ml-0 ml-2 text-red-500">Login</Link>
                       </p>
                    </div>


                </div>



            </div>
             </form>
        </div>
    )
}

export default Signup
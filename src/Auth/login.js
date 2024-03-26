import { Link, useNavigate, } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import axios from "axios";



function Login () {

    const navigate = useNavigate();

    const [error, setError] = useState('');

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState("");




      const loginHandler = async (e) => {
        e.preventDefault();



        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
    
        try {
          const { data } = await axios.post(
            // "http://localhost:3005/auth/login",
            "https://www.portal-sanieldanproperties-api.onrender.com/auth/login",
            { username, password },
            config
          );

          localStorage.setItem("authToken", data.Token);
          localStorage.setItem("authUser", JSON.stringify(data.user));
          

          setSuccess("Login successful! You're being redirected to your dashboard");
          setUsername("");
          setPassword("");
          setTimeout(() => {
            setSuccess("");
            navigate("/dashboard");
          }, 5000);
        } catch (error) {
          setError(error.response.data.error);

          setTimeout(() => {
          setPassword("");

          navigate("/");
        }, 5000);
        }
      };

      useEffect(() => {
        if (localStorage.getItem("authUser")) {
          navigate("/dashboard");
        }
      }, [navigate]);




    return(
        <div className="">
            <div className="background-image text-white ml-auto mr-auto">
                <div className="gg">
                 <div>
                    <div className="flex text-5xl justify-center font-bold">
                    <h1 className="">Welcome </h1>
                    <h1 className=" text-red-500"> Back</h1>
                    </div>
                  <div className="flex justify-center my-3">
                    <p class="border-2 bg-white h-0 w-32 "></p>
                  </div>

                       <p className=" mx-80 mt-2 max-sm:mx-0 ">Welcome to our portal! Please enter your login credentials to access your account. If you don’t have an account yet, please <Link href="/signup" className="text-red-500">sign up</Link> to get started.</p>


                 </div>
                </div>
            </div>

            <form onSubmit={loginHandler}>

            <div className="flex justify-center mt-16 mb-10">
             {error && (
                    <div
                    id="pop-up"
                    style={{ zIndex: 9999, borderTopWidth: "6px" }}
                    class="fixed border-red-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3"
                    >
                    <h2 class="font-bold tracking-wider">Login Failed</h2>
                    <p class="text-sm text-left tracking-wider pt-1">{error}</p>
                    </div>
                )}
                {success && (
                    <div
                    id="pop-up"
                    style={{ zIndex: 9999, borderTopWidth: "6px" }}
                    class="fixed  border-green-600 shadow-xl bg-white mt-24 xl:mt-28 mr-4 max-w-xs top-0 right-0 py-2 px-3"
                    >
                    <h2 class="font-bold tracking-wider">Login Successful</h2>
                    <p class="text-sm text-left tracking-wider pt-1">{success}</p>
                    </div>
                )}


                <div className="bg-white container mx-80 max-sm:mx-2 px-3 rounded-xl">
                    <h1 className="mt-5 text-red-600 text-4xl font-semibold ">Log In</h1>

                    <div className="group mt-5 flex justify-center ">
                        <svg class="icon left-16 max-sm:left-2" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24" fill="#0000"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" type="text" placeholder="Username" name="username"  onChange={(e) => {setUsername(e.target.value);}} required   value={username}  />
                    </div>
                    {/* {usernameempty && <p className="text-red-500 mb-3 absolute" style={{zIndex: "999"}}>{usernameempty}</p>}
                    {usernamematch && <p className="text-red-500 mb-3 absolute" style={{zIndex: "999"}}>{usernamematch}</p>} */}


                    <div className="group mt-5 flex justify-center">
                    <svg class="icon left-16 max-sm:left-2" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24" fill="none"><path d="M10.49 2.23 5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z" stroke="#FF8A65"stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 12.5v3" stroke="red" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" name="password" type="password" placeholder="password"   onChange={(e) => {setPassword(e.target.value);}} id="password"   value={password} required/>
                    </div>
                    {/* {passwordempty && <p className="text-red-500 mb-3 absolute" style={{zIndex: "999"}}>{passwordempty}</p>}
                    {passwordmatch && <p className="text-red-500 mb-3 absolute" style={{zIndex: "999"}}>{passwordmatch}</p>} */}


                    <div class="mt-5 float-right mr-14 max-sm:mr-2">
                        <input type="checkbox" name="rememberme"/>
                        <label for="rememberme" class="text-red-500 font-semibold">Rremember Me</label>
                    </div>

                    {error && <p className="text-red-500 mb-3">{error}</p>}

                    <div className="mt-20">
                        <button type="submit" id="deed1" className="bg-red-400 text-white w-72 h-10 rounded text-lg" >Log In</button>
                    </div>

                    <div className="mt-10 mb-5">
                        <Link to="/signup"  className="ml-10 underline max-sm:ml-0">Register</Link>

                        <Link to="/forgot-password" className="float-right mr-40 underline max-sm:mr-10">forgot password?</Link>
                    </div>

                </div>


            </div>
            </form>
        </div>
    )
}

export default Login
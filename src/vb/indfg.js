import { Link, useNavigate } from "react-router-dom"
import React, { useState } from 'react';



function Login () {

    const navigate = useNavigate();
    const [usernameempty, setUsernameEmpty] = useState('');
    const [usernamematch, setUsernameMatch] = useState('');
    const [passwordempty, setPasswordEmpty] = useState('');
    const [passwordmatch, setPasswordMatch] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({

        name: '',
        password: '',

      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Check if input is empty and set corresponding state

    };

      console.log(formData)


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                'http://localhost:3001/auth/login',
                // 'https://portal-sanieldanproperties-api.onrender.com/auth/login',
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                const data = await response.json(); // Assuming response contains JSON data
                console.log('Login successful:', data);
                // Handle successful signup, e.g., redirect user to another page or show a success message
                setUser(data)
                navigate("/dashboard");
            } else {
                const responseData = await response.json();
                if (response.status === 400) {
                    if (responseData.error === 'Please provide Username') {
                        setUsernameEmpty(responseData.error);

                        setTimeout(() => {
                            setUsernameEmpty('');
                        }, 5000);

                    } else if (responseData.error === 'Username does not exists') {
                        setUsernameMatch(responseData.error);

                        setTimeout(() => {
                            setUsernameMatch('');
                        }, 5000);

                    } else if (responseData.error === 'Please provide Password') {
                        setPasswordEmpty(responseData.error);

                        setTimeout(() => {
                            setPasswordEmpty('');
                        }, 5000);

                    } else if (responseData.error === 'Password does not match') {
                        setPasswordMatch(responseData.error);

                        setTimeout(() => {
                            setPasswordMatch('');
                        }, 5000);

                    }else {
                        setError(responseData.error);

                        setTimeout(() => {
                            setError('');
                        }, 5000);
                    }
                } else {
                    setError('Failed to sign up');

                    setTimeout(() => {
                        setError('');
                    }, 5000);
                }
            }
        } catch (error) {
            console.log('Error signing up:', error);
            // Handle network errors or other exceptions
        }
    };
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

            <form onSubmit={handleSubmit}>

            <div className="flex justify-center mt-16 mb-10">


                <div className="bg-white container mx-80 max-sm:mx-2 px-3 rounded-xl">
                    <h1 className="mt-5 text-red-600 text-4xl font-semibold ">Log In</h1>

                    <div className="group mt-5 flex justify-center ">
                        <svg class="icon left-20 max-sm:left-5" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24" fill="#0000"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" type="text" placeholder="Username" name="username" onChange={handleChange} value={formData.username} />
                    </div>
                    {usernameempty && <p className="text-red-500 mb-3 absolute" style={{zIndex: "999"}}>{usernameempty}</p>}
                    {usernamematch && <p className="text-red-500 mb-3 absolute" style={{zIndex: "999"}}>{usernamematch}</p>}


                    <div className="group mt-5 flex justify-center">
                    <svg class="icon left-20 max-sm:left-5" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24" fill="none"><path d="M10.49 2.23 5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z" stroke="#FF8A65"stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 12.5v3" stroke="red" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" name="password" type="password" placeholder="password" onChange={handleChange} value={formData.password} />
                    </div>
                    {passwordempty && <p className="text-red-500 mb-3 absolute" style={{zIndex: "999"}}>{passwordempty}</p>}
                    {passwordmatch && <p className="text-red-500 mb-3 absolute" style={{zIndex: "999"}}>{passwordmatch}</p>}


                    <div class="mt-5 float-right mr-14 max-sm:mr-2">
                        <input type="checkbox" name="rememberme"/>
                        <label for="rememberme" class="text-red-500 font-semibold">Rremember Me</label>
                    </div>

                    {error && <p className="text-red-500 mb-3">{error}</p>}

                    <div className="mt-20">
                        <button type="submit" className="bg-red-400 text-white w-72 h-10 rounded text-lg" >Log In</button>
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
import { Link } from "react-router-dom"
import React, { useState } from 'react';
import CountrySelect from "../countryselect";

function Login () {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (selectedOption) => {
      setSelectedCountry(selectedOption);
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

            <div className="flex justify-center mt-16 mb-10">

                <div className="bg-white container mx-80 max-sm:mx-2 px-3 rounded-xl">
                    <h1 className="mt-5 text-red-600 text-4xl font-semibold ">Sign Up</h1>

                    <div className="group mt-5 flex justify-center ">
                        <svg class="icon left-20 max-sm:left-5" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24" fill="#0000"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" type="text" placeholder="*Username" />
                    </div>

                    <div className="group mt-5 flex justify-center">
                    <svg class="icon left-20 max-sm:left-5" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24" fill="none"><path d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z" stroke="red" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.996 11h.01M11.995 11h.01M7.995 11h.008" stroke="#FF8A65" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" type="email" placeholder="*Email" />
                    </div>

                    <div className="group mt-5 flex justify-center">
                    <svg class="icon left-20 max-sm:left-5" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="#FF8A65" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m19.21 15.74-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.41 22c0-3.87 3.85-7 8.59-7 1.04 0 2.04.15 2.97.43" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" type="text" placeholder="*First Name" />
                    </div>

                    <div className="group mt-5 flex justify-center">
                    <svg class="icon left-20 max-sm:left-5" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="#FF8A65" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m19.21 15.74-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.41 22c0-3.87 3.85-7 8.59-7 1.04 0 2.04.15 2.97.43" stroke="red" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" type="text" placeholder="*Last Name" />
                    </div>

                    <div className="group mt-5 flex justify-center">
                    <svg class="icon left-20 max-sm:left-5" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24" fill="none"><path d="M10.49 2.23 5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z" stroke="#FF8A65"stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 12.5v3" stroke="red" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" type="password" placeholder="*Password" />
                    </div>

                    <div className="group mt-5 flex justify-center">
                    <svg class="icon left-20 max-sm:left-5" xmlns="http://www.w3.org/2000/svg" width="30" height="32" viewBox="0 0 24 24" fill="none"><path d="M10.49 2.23 5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z" stroke="#FF8A65"stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 12.5v3" stroke="red" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <input className="input w-4/5 max-sm:w-full" type="password" placeholder="*Confirm Password" />
                    </div>

                    <div className="group mt-5 flex justify-center">
                     <CountrySelect value={selectedCountry} className="input w-4/5 max-sm:w-full" onChange={handleCountryChange} />

                    </div>




                    <div class="mt-5 float-right mr-14 max-sm:mr-2">
                        <input type="checkbox" name="rememberme"/>
                        <label for="rememberme" class="text-red-500 font-semibold">Rremember Me</label>
                    </div>

                    <div className="mt-20">
                        <button className="bg-red-400 text-white w-72 h-10 rounded text-lg" >Register</button>
                    </div>

                    <div className="mt-10 mb-5">
                    <p>Have an account?
                     <Link className="underline max-sm:ml-0 ml-2 text-red-500">Login</Link>
                       </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Login
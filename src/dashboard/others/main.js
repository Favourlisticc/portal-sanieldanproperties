import React, { useState, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

const Dashboard = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState();
    const [user, setUser] = useState("");
    const [lsat, setlsat] = useState(localStorage.getItem("authUser") || "");

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

            setlsat(localStorage.getItem("authUser"));




            let userr= user.username
            console.log(userr)

            const response = await axios.get(
              // `http://localhost:3005/dashboard/user/details/${userr}`,
              `https://www.portal-sanieldanproperties-api.onrender.com/users/details${userr}`,
              config);
            if (response.status === 200) {
              setUserDetails(response.data);
              console.log(userDetails)


            } else {
              console.log('Error fetching user details');
            }
          } catch (error) {
            console.log('Error fetching user data:', error);
            // Handle error state or display error message to the user
          }
        };
  
        fetchUserData();
      }, [navigate]);




        console.log(userDetails)
    



    return(
        <div className="mt-10 ">
            <div className="flex justify-between mb-10 max-sm:flex-col max-sm:pl-4">
{userDetails && (
    <div className=" bg-white rounded-md p-3 text-black w-1/2 max-sm:w-80 h-24 mr-3 max-sm:mr-0">
                   <p className=" text-left text-gray-600 text-xl "> ₦:{userDetails.balance}</p>
                   <p className=" text-left text-xl mt-5 font-semibold">Current Account Balance</p>

                </div>
)

}

{userDetails && (
            <div className=" bg-white rounded-md p-3 text-black w-1/2 h-24 max-sm:w-80 max-sm:mt-3">
                   <p className=" text-left text-gray-600 text-xl"> ₦:{userDetails.totaltransactions}</p>
                   <p className=" text-left text-lg mt-5 font-semibold max-sm:text-xs">Withdrawn Earnings by Now (total Transactions)</p>

                </div>
       )

      }



            </div>

            <div className="flex flex-wrap justify-between max-sm:flex-col max-sm:flex-nowrap max-sm:pl-4">
            {userDetails && (
                <div className=" bg-green-500 rounded-md p-3 text-gray-50 max-sm:w-80 ">
                   <p className=" text-left">{userDetails.totalrefferls}</p>
                   <p className=" text-left ">Total Referrals</p>
                   <p className="text-left max-sm:text-xs">rewards and commissions recieved by now</p>
                </div>
                )

}
{userDetails && (
                <div className=" bg-orange-400 rounded-md p-3 text-gray-50 max-sm:w-80 max-sm:mt-5">
                   <p className=" text-left">{userDetails.totalrefferls}</p>
                   <p className=" text-left">Paid Referrals</p>
                   <p className="text-left max-sm:text-xs">withdrawn number of referrals until now</p>
                </div>
                              )

                            }

{userDetails && (
                <div className="bg-red-500 rounded-md p-3 text-gray-50 max-sm:w-80 max-sm:mt-5">
                   <p className=" text-left">{userDetails.unpaid}</p>
                   <p className=" text-left">UnPaid Referrals</p>
                   <p className="text-left max-sm:text-xs">which have been not withdrawn yet</p>
                </div>
                )

}

{userDetails && (
                <div className=" bg-blue-500 rounded-md p-3 text-gray-50 mt-3 w-80 h-20 max-sm:w-80 max-sm:mt-5">
                   <p className=" text-left">{userDetails.totalpayouttrans}</p>
                   <p className="text-left max-sm:text-xs mt-3">Total Payout Transactions</p>

                </div>
                )

}


            </div>

            <p className="text-left mt-5 dark:text-white/30 text-xs text-wrap max-sm:w-80">You can learn more about Affiliate program and to start earning referrals <Link href="/Learn more" className="text-red-500 underline">here</Link> </p>

            <div className="flex mt-5  max-sm:flex-col max-sm:pl-4">

                <div className="bg-white p-2 w-2/3 max-sm:w-80 rounded-md">
                    <p className="text-left flex text-blue-700 font-bold max-sm:text-xs">Earn Overview <p className=" text-gray-500 font-normal"> (for Last 30 days)</p></p>
                    <p className="text-left max-sm:text-xs">Line Graph for Earnings back to 30 days.</p>

                    <hr className="mt-72 mb-1"/>

                    <div className="flex">
                    <div>
                        <p>Total Earnings</p>
                        <p className="font-bold mt-5">0.00NGN</p>
                    </div>



                    <div className=" border-l ml-5 pl-5">
                        <p>Clicks</p>
                        <p className="font-bold mt-5">0</p>
                    </div>
                    </div>
                </div>

                <div className="bg-white rounded-md ml-10 max-sm:ml-0 max-sm:w-80  w-96 h-full pb-20 max-sm:mt-6">
                <h2 className="pt-3 pl-5 font-bold text-blue-800 text-left mb-3">Summary for This Month</h2>

                <hr/>

                <div className="ml-3.5 mr-3.5">
                    <div className="flex  mt-1.5 mb-1.5 ml-5 justify-between mr-10">
                        <p>Total Referrals: </p>

                        <p className="">0</p>

                    </div>
                    <hr/>

                    <div className="flex  mt-1.5 mb-1.5 ml-5 justify-between mr-10">
                        <p>Total Earnings: </p>
                        <p className="">0.00NGN</p>
                    </div>
                    <hr/>

                    <div className="flex  mt-1.5 mb-1.5 ml-5 justify-between mr-10">
                        <p>UnVerified Referrals: </p>
                        <p className="">0</p>
                    </div>
                    <hr/>

                    <div className="flex mt-1.5 mb-1.5 ml-5 justify-between mr-10">
                        <p>Clicks: </p>
                        <p className="">0</p>
                    </div>
                    <hr/>

                    <div className="flex mt-1.5 mb-1.5 ml-5 justify-between mr-10">
                        <p>Conversion: </p>
                        <p className="">0%</p>
                    </div>
                    <hr/>
                </div>
                </div>
            </div>


        </div>
    )
}

export default Dashboard
import React from "react"
import { Link } from "react-router-dom"

const Dashboard = () => {
    return(
        <div className="mt-10 ">
            <div className="flex justify-between mb-10">

            <div className=" bg-white rounded-md p-3 text-black w-1/2 h-24 mr-3">
                   <p className=" text-left text-gray-600 text-xl ">0.00NGN</p>
                   <p className=" text-left text-xl mt-5 font-semibold">Current Account Balance</p>

                </div>

            <div className=" bg-white rounded-md p-3 text-black w-1/2 h-24">
                   <p className=" text-left text-gray-600 text-xl">0.00NGN</p>
                   <p className=" text-left text-lg mt-5 font-semibold">Withdrawn Earnings by Now (total Transactions)</p>

                </div>



            </div>

            <div className="flex flex-wrap justify-between">

                <div className=" bg-green-500 rounded-md p-3 text-gray-50">
                   <p className=" text-left">0</p>
                   <p className=" text-left">Total Referrals</p>
                   <p>rewards and commissions recieved by now</p>
                </div>

                <div className=" bg-orange-400 rounded-md p-3 text-gray-50">
                   <p className=" text-left">0</p>
                   <p className=" text-left">Paid Referrals</p>
                   <p>withdrawn number of referrals until now</p>
                </div>

                <div className="bg-red-500 rounded-md p-3 text-gray-50">
                   <p className=" text-left">0</p>
                   <p className=" text-left">UnPaid Referrals</p>
                   <p>which have been not withdrawn yet</p>
                </div>

                <div className=" bg-blue-500 rounded-md p-3 text-gray-50 mt-3 w-80 h-20">
                   <p className=" text-left">0</p>
                   <p className=" text-left">Total Payout Transactions</p>

                </div>


            </div>

            <p className="text-left mt-5 dark:text-white/30">You can learn more about Affiliate program and to start earning referrals <Link href="/Learn more" className="text-red-500 underline">here</Link> </p>

            <div className="flex mt-5">

                <div className="bg-white p-2 w-2/3  rounded-md">
                    <p className="text-left flex text-blue-700 font-bold">Earn Overview <p className=" text-gray-500 font-normal"> (for Last 30 days)</p></p>
                    <p className="text-left">Line Graph for Earnings back to 30 days.</p>

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

                <div className="bg-white rounded-md ml-10 w-96">
                <h2 className="pt-3 pl-5 font-bold text-blue-800 text-left mb-3">Summary for This Month</h2>

                <hr/>

                <div className="">
                    <div className="flex  mt-1.5 mb-1.5">
                        <p>Total Referrals: </p>
                        <p>0</p>
                    </div>
                    <hr/>

                    <div className="flex  mt-1.5 mb-1.5">
                        <p>Total Earnings: </p>
                        <p>0.00NGN</p>
                    </div>
                    <hr/>

                    <div className="flex  mt-1.5 mb-1.5">
                        <p>UnVerified Referrals: </p>
                        <p>0</p>
                    </div>
                    <hr/>

                    <div className="flex mt-1.5 mb-1.5">
                        <p>Clicks: </p>
                        <p>0</p>
                    </div>
                    <hr/>

                    <div className="flex mt-1.5 mb-1.5">
                        <p>Conversion: </p>
                        <p>0%</p>
                    </div>
                    <hr/>
                </div>
                </div>
            </div>


        </div>
    )
}

export default Dashboard
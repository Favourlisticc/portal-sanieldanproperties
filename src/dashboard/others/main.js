import React from "react"

const Dashboard = () => {
    return(
        <div className="mt-10">
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
        </div>
    )
}

export default Dashboard
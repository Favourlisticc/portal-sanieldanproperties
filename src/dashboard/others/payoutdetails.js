function Payoutdetails() {
    return(
        <div className="mt-12">
            <hr className="hrracctdetails"/>
            <div className="text-left mt-6 flex">
                <input type="text" placeholder="Pay me by Direct Deposit" readOnly className="p-2 rounded"/>
                <p className="mt-1.5 ml-2 dark:text-white">-----only option avaliable</p>
            </div>

            <p className="text-left mt-3 text-gray-600">Before we can pay you, we must have your Payment Information. Be sure that are properly submitted.</p>

            <div>
                <p className="text-left mt-7 text-xl dark:text-white">Bank Account details</p>

                <div class="mt-5 flex-col text-left">
                <label for="bname" className="dark:text-white">Bank Name</label><br/>
                <input required="" type="text" name="bname" autocomplete="off" class="input" />

                </div>

                <div class="mt-5 flex-col text-left">
                <label for="acctnum" className="dark:text-white">Account Number</label><br/>
                <input required="" type="acctnum" name="bname" autocomplete="off" class="input" />

                </div>

                <div class="mt-5 flex-col text-left">
                <label for="fullname" className="dark:text-white">Your FullName</label><br/>
                <input required="" type="text" name="fullname" autocomplete="off" class="input" />

                </div>


                <div className="text-left mt-5 w-72">
                <button className="buttonn px-3">Add Account Details</button>
                </div>

            </div>
        </div>
    )
}

export default Payoutdetails
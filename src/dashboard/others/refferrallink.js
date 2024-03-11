function Referrallink() {
    return(
        <div className="mt-20">
           <div>
            <hr className="hrr dark:border-t-white"/>

            <div className="bg-white w-1/2 p-2 mt-10 max-sm:w-80">
                <p className="font-bold text-gray-400 flex">Tracking ID: <p className=" text-gray-900 ml-2">31</p></p>
                <p className=" mt-2 font-normal text-gray-400 text-left">Your unique identificator will be used for tracking new leads</p>
            </div>

            <p className="text-left dark:text-white mt-5 flex text-xs max-sm:flex-col">Default Affiliate Link: <p className="underline">https://portal.sanieldanproperties.com/sign-up/?ref=31</p></p>
           </div>

           <div className="mt-16">
            <hr className="hrr2 dark:border-t-white"/>

            <p className=" text-left mt-5 dark:text-white">If you'd prefer to append your own affiliate links with an alternate incoming URL, use the following structure. To build your link, take the following URL and append it with the Alternate Incoming URL you want to use.</p>

            <div class=" text-left mt-10" >

               <label for="select" className=""  >Campaign:</label><br/>
                <select name="select" class="placeholder-violet-700 text-sm font-bold rounded-lg focus:ring-violet-500 focus:border-violet-500 w-1/2 p-2.5 max-sm:w-80">

                    <option>......</option>

                </select>
            </div>


            <div class="coolinput mt-5">
                <label for="input" class="text">Specific Website page:</label>
                <input type="text" placeholder="Type your web link here ..." name="input" className="input max-sm:w-80" />
            </div>

            <div className="flex mt-10">
            <button type="submit" className="w-32 bg-gray-700 h-12 text-white rounded">Generate Link</button>
            </div>
           </div>
        </div>
    )
}

export default Referrallink
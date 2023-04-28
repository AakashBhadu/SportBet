import * as React from "react";

export const AccountView = ({open}: {open: boolean}) => {
    return (
        <div className={`h-[calc(100vh-10rem)] flex-none border-violet-800 bg-white
                        ${open ? "block absolute w-full md:w-[30rem] md:border-r" :"hidden"} 
                        xl:block xl:static xl:w-[30rem] xl:border-l xl:border-r-0`}>
            <div className="flex flex-row justify-between font-semibold text-sm text-white">
                <div className=" flex-grow bg-slate-600 py-[13px]">
                    My Bets
                </div>
                <div className=" flex-grow bg-slate-300 py-[13px]">
                    My Account
                </div>
            </div>
            <div className="flex items-center justify-center h-full">
                <h1>You have No Bids</h1>
            </div>
        </div>
    )
}

import * as React from "react";

export const AccountView = () => {
    return (
        <div className="hidden flex-none w-[32rem] border-l-2 border-t-cyan-900 border-solid xl:block">
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
import { useState } from "react"
import { MyBets } from "./MyBets";
import { MyInfo } from "./MyInfo";

export const AccountView = ({open}: {open: boolean}) => {
    const [shouldSwitch, setShouldSwitch] = useState(false);

    return (
        <div className={`block absolute w-full md:w-[30rem] h-[calc(100vh-10rem)] flex-none bg-white drop-shadow-md transition-transform ease-in duration-500
                        ${open ? "md:border-r translate-x-0" :"-translate-x-full"} 
                        xl:block xl:static xl:w-[30rem] xl:border-l xl:border-r-0 xl:transition-none xl:translate-x-0`}>
            <div className="flex flex-row justify-between font-semibold text-sm text-white">
                <button className={`flex-grow bg-slate-300 py-[13px] ${shouldSwitch && "bg-slate-600"}`} onClick={() => setShouldSwitch(true)}>
                    My Bets
                </button>
                <button className={`flex-grow bg-slate-300 py-[13px] ${!shouldSwitch && "bg-slate-600"}`} onClick={() => setShouldSwitch(false)}>
                    My Account
                </button>
            </div>
            <div className="flex items-center justify-center h-full">
                {
                    shouldSwitch 
                    ?
                    <MyBets /> 
                    : 
                    <MyInfo />
                }
            </div>
        </div>
    )
}

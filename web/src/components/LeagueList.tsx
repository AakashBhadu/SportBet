import { PropsWithChildren } from "react"

export const LeagueList = ({children}: PropsWithChildren) => {
    return (
        <div>
            <div className="w-full">
                <span className=" text-start text-[1.2rem] font-bold py-1 float-left">Top Leagues</span>
                <span className=" text-cyan-700 float-right my-2 hover:text-blue-600 cursor-pointer">view all</span>
            </div>
            <div className="w-full">
                <div className="flex flex-row flex-wrap w-full gap-x-8 gap-y-4 p-4 bg-slate-300 max-h-36 overflow-y-clip">
                    {children}
                </div>
            </div>

        </div>
    )
}
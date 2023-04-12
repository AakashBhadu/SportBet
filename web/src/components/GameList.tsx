import { PropsWithChildren } from "react"

interface GameListData {
    leagueName?: string
    gameSchemes: string[]
}
export const GameList = ({children, leagueName, gameSchemes}:PropsWithChildren<GameListData>) => {
    return (
        <div className="flex flex-col">
            <div className=" bg-slate-400 text-white">
                <span className=" text-start text-[1.2rem] font-bold py-1 float-left">{leagueName}</span>
                <span className="float-right py-1 mt-1">
                    {
                        (gameSchemes != undefined) &&
                        gameSchemes.map((scheme, index, arr) => {
                            if(index == arr.length - 1) return <span className=" pr-4">{scheme}</span>
                            return <span className=" pr-16">{scheme}</span>
                        })
                    }
                </span>
            </div>

            <div className="flex flex-col gap-2">
                {children}
            </div>
        </div>
    )
}
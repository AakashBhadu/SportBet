import { useRouter } from "next/router";
import { PropsWithChildren, memo, useEffect, useState } from "react"
import { SportItem } from "../SportIem";
import { SportListViewNav } from "../SportListViewNav";

const imagePath = "https://dashboard.api-football.com/public/img/small/";

const SportInitializeData = [
    ["Football", "hero-banner.png"],
    ["Vollyeball", "min-volleyball.png"],
    ["Formula-1", "f1-mini.png"],
    ["Handball", "min-handball.png"],
    ["Hockey", "min-hockey.png"],
    ["Basketball", "min-basketball.png"],
    ["NBA", "min-nba.png"],
    ["Baseball", "baseball-logo.png"],
    ["Rugby", "min-rugby.png"],
    ["NFL", "min-nfl.png"]
];

export const SportLayout = ({children}:PropsWithChildren) => {

    let router = useRouter();
    let [currentSport, setCurrentSport] = useState<string>();
    useEffect(() => {
        if(router.isReady) {
            setCurrentSport(router.query.sport as string);
        }
    }, [router.query.sport]);

    return (
        <div className="flex flex-col flex-grow w-full gap-y-6 overflow-hidden">
            <SportListViewNav>
                {
                    SportInitializeData.map((Data, index) => {
                        return(
                            <SportItem 
                                name={Data[0]} 
                                url={imagePath + Data[1]} 
                                pathName={router.pathname}
                                isClicked={Data[0] == currentSport} 
                                key={index}
                            />
                        )
                    })
                }
            </SportListViewNav>
            {children}
        </div>
    )
}

import { useRouter } from "next/router";
import { PropsWithChildren, memo, useEffect, useState } from "react"
import { SportItem } from "../SportIem";
import { SportListViewNav } from "../SportListViewNav";

const SportInitializeData = [
    ["Football", "/images/hero-banner.png"],
    ["Vollyeball", "/images/min-volleyball.png"],
    ["Formula-1", "/images/f1-mini.png"],
    ["Handball", "/images/min-handball.png"],
    ["Hockey", "/images/min-hockey.png"],
    ["Basketball", "/images/min-basketball.png"],
    ["NBA", "/images/min-nba.png"],
    ["Baseball", "/images/baseball-logo.png"],
    ["Rugby", "/images/min-rugby.png"],
    ["NFL", "/images/min-nfl.png"]
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
                                url={Data[1]} 
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
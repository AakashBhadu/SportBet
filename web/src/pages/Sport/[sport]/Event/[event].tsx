import { useRouter } from "next/router";
import { ReactElement, useEffect, useState, MouseEvent} from "react";
import { SportLayout } from "@/components/Layouts/SportLayout";
import { TopLayout } from "@/components/Layouts/TopLayout";
import { Loader } from "@/components/Loader";
import { SportViewer } from "@/components/SportViewer/SportViewer";
import { NextPageWithLayout } from "@/pages/_app";
import api from "@/Commons/api";
import { Refresh } from "@/components/Refresh";

interface SportEvent {
    name: string
    sportName: string
}

const SportEvent: NextPageWithLayout = () => {

    let [currentEvent, setEvent] = useState<SportEvent>({name: "", sportName: ""}); 
    let [data, setData] = useState<any | Error>(null);
    let router = useRouter();

    useEffect(() => {
        if(router.isReady) {
            let eventData = {
                name: router.query.event as string, 
                sportName: router.query.sport as string
            };
            setEvent(eventData);
            api.get("Sport/" + eventData.sportName + "/Live")
            .then(res => setData(res.data))
            .catch(() => setData(new Error()));
        }
    }, [router.query.sport, router.query.event]);

    function OnEventClick(eventElement:MouseEvent<HTMLSpanElement>)
    {
        let innerHtml = (eventElement.target as HTMLSpanElement).innerHTML;
        setEvent({name: innerHtml, sportName: currentEvent.sportName});
    } 

    if(!data) {
        // loading when data is null
        return <Loader />
    } else {
        // if route changed. 
        // do set data to null and keep loading.
        if(router.query.sport != currentEvent.sportName) {
            setData(null);
            return <Loader />
        }
        // referesh if data has errors
        if(data instanceof Error) {
            return <Refresh Refresh={() => setData(null)}/>
        }
    }

    return (
        <>
            <div className="flex justify-center flex-grow text-lg font-medium px-4 py-2 text-white">
                {
                    ["Popular Events", "Live Now", `All ${currentEvent.sportName}`].map(event => {

                        if(event == currentEvent.name) return <span className="px-10 py-2 bg-slate-500" onClick={OnEventClick}>{event}</span>

                        return <span className="px-10 py-2 bg-zinc-300" onClick={OnEventClick}>{event}</span>
                    })
                }
            </div>
            <SportViewer sportName={currentEvent.sportName} data={data} eventType={currentEvent.name} />
        </>
    )
}

SportEvent.getLayout = function(page: ReactElement) {
    
    return (
        <TopLayout>
            <SportLayout>
                {page}
            </SportLayout>
        </TopLayout>
    )
}


export default SportEvent;
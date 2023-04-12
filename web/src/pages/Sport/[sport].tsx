import { useRouter } from "next/router";
import { ReactElement, useEffect} from "react";
import { NextPageWithLayout } from "../_app";
import { TopLayout } from "../../components/Layouts/TopLayout";
import { SportLayout } from "../../components/Layouts/SportLayout";

const SportItem: NextPageWithLayout = () => {

    const router = useRouter();

    useEffect(() => {
        if(router.isReady) {
            router.push({
                pathname: "/Sport/[sport]/Event/Popular Events", 
                query: { sport: router.query.sport }
            }, undefined, {shallow: true});
        }
    })

    return (
        <></>
    )
}

SportItem.getLayout = function(page: ReactElement) {
    return (
        <TopLayout>
            <SportLayout>
                {page}
            </SportLayout>
        </TopLayout>
    )
}


export default SportItem;
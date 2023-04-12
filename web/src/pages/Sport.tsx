import { ReactElement, useEffect } from "react";
import { SportLayout } from "../components/Layouts/SportLayout";
import { TopLayout } from "../components/Layouts/TopLayout";
import { NextPageWithLayout } from "./_app";
import { useRouter } from "next/router";

const Sport: NextPageWithLayout = () => {

    let router = useRouter();

    useEffect(() => {
        if(router.isReady) {
            router.push("Sport/Football", undefined, {shallow: true});
        }
    })

    return (
        <>
        </>
    )
}

Sport.getLayout = function(page: ReactElement) {
    return (
        <TopLayout>
            <SportLayout>
                {page}
            </SportLayout>
        </TopLayout>
    )
}


export default Sport;
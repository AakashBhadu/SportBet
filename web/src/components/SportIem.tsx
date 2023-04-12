import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";

interface SportItem {
    name: string,
    url: string,
    pathName: string,
    isClicked: boolean,
}

export const SportItem = memo((sportItem: SportItem) => {

    let clickStyle = "bg-slate-500";
    let path = sportItem.pathName;
    let aspath = path.replace("[sport]", sportItem.name).replace("[event]", "Popular Events");

    return (
            <Link 
                href={path} 
                as={aspath}
                className={`flex flex-row flex-wrap ${sportItem.isClicked && clickStyle} items-center justify-center gap-2 cursor-pointer px-4 py-2 hover:bg-slate-500`}
            >
                <Image src={sportItem.url} alt="image error" width={28} height={28} />
                <div>{sportItem.name}</div>
            </Link>
    )
});
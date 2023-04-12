export const League = ({name, location}: {name: string, location: string}) => {
    return(
        <div className="flex flex-row flex-shrink justify-start items-center gap-8 px-2 text-center bg-slate-400 text-white">
            <div>
                <div className=" font-semibold text-lg">{name}</div>
                <div className=" font-normal text-base text-start">{location}</div>
            </div>
            <div className=" font-normal text-lg">{">"}</div>
        </div>
    )

}
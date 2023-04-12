
interface RefreshCall {
    Refresh: () => any
}
export const Refresh = ({Refresh}: RefreshCall) => {

    return (
        <div 
        className="flex flex-col w-full h-full gap-4 justify-center items-center"
        onClick={Refresh}
        >
            <div className="text-red-600 font-normal text-4xl">Error! Loading page</div>
            <button className=" bg-blue-700 text-white py-2 px-8 text-1xl rounded-lg">Refresh</button>
        </div>
    )
}
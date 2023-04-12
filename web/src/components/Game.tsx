export const Game = ({gameType, teamNames, gameScores}:{gameType: string, teamNames: string[], gameScores: string[]}) => {


    return (
            <div className="flex flex-row justify-evenly items-center flex-grow bg-white px-2">
                <div className="flex flex-row flex-1 justify-between gap-6">
                    <div>
                        <div>{teamNames[0]}</div>
                        <div>{teamNames[1]}</div>
                    </div>
                    <div className=" bg-lime-700 px-3 text-white">
                        <div>{gameScores[0]}</div>
                        <div>{gameScores[1]}</div>
                    </div>
                </div>
                <div>
                    <span className=" mr-[5.5rem] ml-24">2.5</span>
                    <span className=" mr-[5.5rem]">3</span>
                    <span className=" mr-6">3</span>
                </div>
            </div>
    )
}
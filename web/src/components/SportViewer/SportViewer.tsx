import { Router, useRouter } from "next/router"
import { Game } from "../Game"
import { GameContainer } from "../GameContainer"
import { GameList } from "../GameList"
import { League } from "../League"
import { LeagueList } from "../LeagueList"


let GameSchemes: {[key: string]: string[]} = {
    Football:  ["Home", "Draw", "Away"],
    Basketball: ["Home", "Away"],
    Baseball: ["Home", "Away"],
}

interface SportData {
    sportName: string
    data: any
    eventType: string
}

export const SportViewer = ({sportName, data, eventType}: SportData) => {

    let currentGameScheme = GameSchemes[sportName]
    console.log(currentGameScheme)

    let PopularEvents = (
        <>
            <LeagueList>
                {
                    data["leagues"].map((league:any) => {
                        return <League name={league.name} location={league.country.name}/>
                    })
                }
            </LeagueList>
            <GameContainer>
                <GameList leagueName="Premier League" gameSchemes={currentGameScheme}>
                    <Game gameType="Premier League" gameScores={["2", "3"]} teamNames={["Argentina", "Protugal"]}/>
                    <Game gameType="Super League" gameScores={["2", "3"]} teamNames={["Mumbai FC", "Hyderbad"]}/>
                    <Game gameType="Premier League" gameScores={["2", "3"]} teamNames={["Argentina", "Protugal"]}/>
                    <Game gameType="Super League" gameScores={["2", "3"]} teamNames={["Mumbai FC", "Hyderbad"]}/>
                </GameList>
                <GameList leagueName="Premier League" gameSchemes={currentGameScheme}>
                    <Game gameType="Premier League" gameScores={["2", "3"]} teamNames={["Argentina", "Protugal"]}/>
                    <Game gameType="Super League" gameScores={["2", "3"]} teamNames={["Mumbai FC", "Hyderbad"]}/>
                    <Game gameType="Premier League" gameScores={["2", "3"]} teamNames={["Argentina", "Protugal"]}/>
                    <Game gameType="Super League" gameScores={["2", "3"]} teamNames={["Mumbai FC", "Hyderbad"]}/>
                </GameList>
            </GameContainer>
        </>
    )

    let AllSport = (
        <>
        </>
    )

    let LiveNow = (
        <>
        </>
    )

    return(
        <div className="flex flex-col bg-gray-100 gap-4 p-2 h-full lg:mx-32 min-lg:mx-64">
            {PopularEvents}
        </div>
    )
}
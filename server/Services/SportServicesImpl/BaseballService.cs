using System.Text.Json;
using System.Text.Json.Serialization;

public class BaseballService: SportServiceHelper, ISportService
{
    private JsonSerializerOptions jsonSerializerOptions;
    public BaseballService(HttpClient httpClient): base(httpClient)
    {
        this.jsonSerializerOptions = new JsonSerializerOptions
        {
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingDefault
        };
    }

    public SportType SportType => SportType.Baseball;

    public Task<AllSport> GetAllSport()
    {
        throw new NotImplementedException();
    }

    public Task<Game> GetGame(int gameId)
    {
        throw new NotImplementedException();
    }

    public async Task<List<Game>> GetGamesOf(int leagueId)
    {
        var response = await GetResponseJsonElementAsync("/games?date=2019-11-23"); 
        List<Game> games = JsonSerializer.Deserialize<List<Game>>(response, jsonSerializerOptions);

        return games;
    }

    public async Task<List<League>> GetLeagues()
    {
        var responseElement = await GetResponseJsonElementAsync("/leagues?season=2023");
        var league = JsonSerializer.Deserialize<List<League>>(responseElement, jsonSerializerOptions);
        
        if(league == null)
        {
            return new List<League>();
        }

        return league;
    }

    public async Task<LiveResult> GetLive()
    {
        var leagues = await GetLeagues();

        if(leagues.Count < 1)
        {
            return null;
        }

        var games = await GetGamesOf(leagues[0].id);

        return new LiveResult{
            leagues = leagues,
            games = games
        };
    }

    public Task<Player> GetPlayersOfTeam(int teamId)
    {
        throw new NotImplementedException();
    }

    public Task<PopularEvent> GetPopularEvents()
    {
        throw new NotImplementedException();
    }
}
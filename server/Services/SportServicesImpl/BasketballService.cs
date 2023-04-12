using System.Text.Json;

public class BasketballService: SportServiceHelper,ISportService
{
    public BasketballService(HttpClient httpClient): base(httpClient)
    {}

    public SportType SportType => SportType.Basketball;

    public Task<AllSport> GetAllSport()
    {
        throw new NotImplementedException();
    }

    public Task<Game> GetGame(int gameId)
    {
        throw new NotImplementedException();
    }

    public Task<List<Game>> GetGamesOf(int leagueId)
    {
        throw new NotImplementedException();
    }

    public async Task<List<League>> GetLeagues()
    {
        var responseElement = await GetResponseJsonElementAsync("/leagues");
        var league = JsonSerializer.Deserialize<List<League>>(responseElement, JsonSerializerOptions.Default);
        
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
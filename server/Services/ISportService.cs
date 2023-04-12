public interface ISportService 
{
    public SportType SportType{get;}
    /// <summary>
    /// get leagues of particular sport
    /// <returns>the league object list</returns>
    /// </summary>
    public Task<List<League>> GetLeagues();
    /// <summary>
    /// get games of particular league using its id
    /// <param name="leagueId">id of the league that will be returned</param>
    /// <returns>the game object list</returns>
    /// </summary>
    public Task<List<Game>> GetGamesOf(int leagueId);

    /// <summary>
    /// Get Games of different leagues
    /// <param name="gameId">id of game that will be returned</param>
    /// <returns>the Game object</returns>
    /// </summary>
    public Task<Game> GetGame(int gameId);

    /// <summary>
    /// Get team of particular team id
    /// <param name="teamId">id of particular team</param>
    /// <returns>the team object</returns>
    /// </summary>
    public Task<Player> GetPlayersOfTeam(int teamId);

    /// <summary>
    /// Get LiveResult of a sport.
    /// <returns>the LiveResult object</returns>
    /// </summary>
    public Task<LiveResult> GetLive();

    /// <summary>
    /// Get All events of a sport.
    /// <returns>the AllSport object</returns>
    /// </summary>
    public Task<AllSport> GetAllSport();

    /// <summary>
    /// Get Popular Events of a sport.
    /// <returns>the PopularEvent object</returns>
    /// </summary>
    public Task<PopularEvent> GetPopularEvents();
}
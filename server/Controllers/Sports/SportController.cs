using Microsoft.AspNetCore.Mvc;

namespace SportBetApiServer.Controllers;

[ApiController]
[Route("[controller]")]
public class SportController
{
    private SportsService sportsService;
    public SportController(SportsService sportsService)
    {
        this.sportsService = sportsService;
    }

    [Route("{sportType}/Live")]
    [HttpGet]
    public async Task<ActionResult<LiveResult>> GetLive(SportType sportType)
    {
        var sportService = sportsService.GetSportServiceOf(sportType);
        var liveResult = await sportService.GetLive();

        return liveResult;
    }

    [Route("{sportType}/PopularEvents")]
    [HttpGet]
    public async Task<ActionResult<PopularEvent>> GetPopularEvents(SportType sportType)
    {
        var sportService = sportsService.GetSportServiceOf(sportType);
        var popularEvent = await sportService.GetPopularEvents();

        return popularEvent;
    }

    [Route("{sportType}/AllEvents")]
    [HttpGet]
    public async Task<ActionResult<AllSport>> GetAllEvents(SportType sportType)
    {
        var sportService = sportsService.GetSportServiceOf(sportType);
        var allSport = await sportService.GetAllSport();

        return allSport;
    }

    [Route("{sportType}/{leagueId}")]
    [HttpGet]
    public async Task<ActionResult<List<Game>>> GetGamesOf(SportType sportType, int leagueId)
    {
        var sportService = sportsService.GetSportServiceOf(sportType);
        var games = await sportService.GetGamesOf(leagueId);

        return games;
    }
}
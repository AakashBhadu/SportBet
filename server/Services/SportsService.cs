public class SportsService
{
    private Dictionary<SportType, ISportService> sportServices;
    public SportsService(IEnumerable<ISportService> sportServices)
    {
        this.sportServices = sportServices.ToDictionary(s => s.SportType, s => s);
    }

    public ISportService GetSportServiceOf(SportType sportType)
    {
        if(!sportServices.ContainsKey(sportType))
        {
            throw new Exception("this service is not registered yet");
        }
        
        return sportServices[sportType];      
    }   

}
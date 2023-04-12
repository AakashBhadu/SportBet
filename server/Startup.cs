public class Startup 
{
    private IConfiguration configuration;
    private IEnumerable<Type> sportServiceTypes;
    public Startup(IConfiguration configuration)
    {
        this.configuration = configuration;
        this.sportServiceTypes = AppDomain.CurrentDomain.GetAssemblies()
                                        .SelectMany(asm => asm.GetTypes())
                                        .Where(type => typeof(ISportService).IsAssignableFrom(type))
                                        .AsEnumerable();
        ConfigureApis();                                
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllers();

        services.AddCors(options => 
            options.AddPolicy("MyPolicy", builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin())
        );

        AddServicesWithHttpClient(services);

        services.AddTransient<SportsService>(serviceProvider => {
            var sportServices = GetAllSportServices(serviceProvider);

            return new SportsService(sportServices);
        });

    }

    public void Configure(IApplicationBuilder app,  IWebHostEnvironment env)
    {
        app.UseRouting();

        app.UseCors("MyPolicy");

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.UseEndpoints(endpoints => {
            endpoints.MapControllers();
        });
    }


    private void ConfigureApis()
    {
        foreach (string sport in Enum.GetNames<SportType>())
        {
            configuration[sport] = $"v1.{sport.ToLower().Replace("_", "-")}.api-sports.io";

            if(sport.Equals("NBA"))
            {
                configuration[sport] = $"v2.{sport.ToLower().Replace("_", "-")}.api-sports.io";
            }
        }

    }

    private void AddServicesWithHttpClient(IServiceCollection services)
    {   
        AddCustomHttpClient<BasketballService>(services, SportType.Basketball);
        AddCustomHttpClient<VolleyballService>(services, SportType.Volleyball);
        AddCustomHttpClient<FormulaService>(services, SportType.Formula_1);
        AddCustomHttpClient<FootballService>(services, SportType.Football);
        AddCustomHttpClient<BaseballService>(services, SportType.Baseball);
        AddCustomHttpClient<HandballService>(services, SportType.Handball);
        AddCustomHttpClient<HockeyService>(services, SportType.Hockey);
        AddCustomHttpClient<RugbyService>(services, SportType.Rugby);
        AddCustomHttpClient<NFLService>(services, SportType.NFL);
        AddCustomHttpClient<NBAService>(services, SportType.NBA);
    }

    private void AddCustomHttpClient<TImpl>(IServiceCollection services, SportType sportType) where TImpl: class
    {
        services.AddHttpClient<TImpl>(client => {
            client.DefaultRequestHeaders.Add("x-rapidapi-key", configuration["SportApiKey"]);
            client.DefaultRequestHeaders.Add("x-rapidapi-host", configuration[sportType.ToString()]);
            client.BaseAddress = new Uri($"https://{configuration[sportType.ToString()]}");
        });
    }

    private IEnumerable<ISportService> GetAllSportServices(IServiceProvider serviceProvider)
    {
        foreach (Type type in sportServiceTypes)
        {
            if(type.Name != typeof(ISportService).Name)
            {
                yield return (ISportService)serviceProvider.GetService(type);
            }
        }
    }
}
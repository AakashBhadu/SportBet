using Microsoft.AspNetCore;

var configuration = GetConfiguration();
var host = BuildWebHost(configuration, args);

host.Run();

IWebHost BuildWebHost(IConfiguration configuration, string[] args) =>
    WebHost.CreateDefaultBuilder()
        .UseConfiguration(configuration)
        .UseStartup<Startup>()
        .Build();



IConfiguration GetConfiguration() =>
    new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
        .AddEnvironmentVariables()
        .Build();


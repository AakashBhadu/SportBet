using System.Text.Json;

/// <summary>
/// base sport service that is used by all sport services to
/// implement common functionality
/// </summary>
public class SportServiceHelper
{
    private HttpClient httpClient;
    public SportServiceHelper(HttpClient httpClient)
    {
        this.httpClient = httpClient;
    }

    protected async Task<JsonElement> GetResponseJsonElementAsync(string requestUri)
    {
        var responseStream = await this.httpClient.GetStreamAsync(requestUri);
        var document = await JsonDocument.ParseAsync(responseStream);

        return document.RootElement.GetProperty("response");
    }
}
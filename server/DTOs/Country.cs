using System.Text.Json.Serialization;

public class Country
{
    public int id {get; set;}
    public string? name {get; set;}
    public string? code {get; set;}
    
    [JsonPropertyName("flag")]
    public string flagUrl {get; set;}
}
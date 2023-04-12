using System.Text.Json;

public class Game
{
    public int id {get; set;}
    public string date {get; set;}
    public string time {get; set;}
    public int timestamp {get; set;}
    public string timezone {get; set;}
    public string stage {get; set;}
    public string week {get; set;}
    public JsonElement status {get; set;}
    public JsonElement league {get; set;}
    public JsonElement country {get; set;}
    public JsonElement teams {get; set;}
    public JsonElement scores {get; set;}
}




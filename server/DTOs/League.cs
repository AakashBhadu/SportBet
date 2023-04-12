public class League
{
    public int id {get; set;}
    public string name {get; set;}
    public string  type {get; set;}

    public string  logo {get; set;}

    public Country country {get; set;}

    public Season[] seasons {get; set;}

}
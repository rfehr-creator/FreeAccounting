namespace DTO.Models
{
    public class AccountDTO
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }
        public string Description { get; set; }
        public decimal Balance { get; set; }
    }
}
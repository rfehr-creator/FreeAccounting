namespace DTO.Models.Transaction;

public class TransactionDTO
{
    public string Id { get; set; }
    public string AccountId { get; set; }
    public string Description { get; set; }
    public decimal Amount { get; set; }
}
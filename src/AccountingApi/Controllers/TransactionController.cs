using DTO.Models.Transaction;
using Microsoft.AspNetCore.Mvc;

namespace AccountingApi.Controllers;

[ApiController]
[Route("[controller]")]
public class TransactionController : ControllerBase
{
    private static readonly TransactionDTO[] transactions =
    [
        new TransactionDTO
        {
            Id = "asdf8ds8f8ds8f8ds8f8ds8f",
            AccountId = "asdf8ds8f8ds8f8ds8f8ds8f",
            Description = "Transaction 1 Description",
            Amount = 100.00m,
        },
        new TransactionDTO
        {
            Id = "asdf8ds8f8ds8f8ds8f8ds8f",
            AccountId = "asdf8ds8f8ds8f8ds8f8ds8f",
            Description = "Transaction 2 Description",
            Amount = 200.00m,
        }
    ];
    private readonly ILogger<TransactionController> _logger;

    public TransactionController(ILogger<TransactionController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<TransactionDTO> Get()
    {
        return transactions;
    }
}

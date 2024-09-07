using DTO.Models.Account;
using Microsoft.AspNetCore.Mvc;

namespace AccountingApi.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountController : ControllerBase
{
    private static readonly AccountDTO[] accounts = new[]
    {
        new AccountDTO
        {
            Id = ";asjfdsalkfjdsalk;fjads;lkfj",
            Name = "Account 1",
            Description = "Account 1 Description"
        },
        new AccountDTO
        {
            Id = "asd8fds8f8asdf8dsa8fdsa8f",
            Name = "Account 2",
            Description = "Account 2 Description"
        }
    };
    private readonly ILogger<AccountController> _logger;

    public AccountController(ILogger<AccountController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<AccountDTO> Get()
    {
        return accounts;
    }
}

# FreeAccounting

FreeAccounting is an open-source project designed to be freely used by everyone. The primary goal of this project is to bring financial awareness to users by providing them with the tools and resources they need to manage their finances effectively.

## Features

- **User-Friendly Interface**: Easy to navigate and use, even for those with minimal financial knowledge.
- **Expense Tracking**: Keep track of your daily, weekly, and monthly expenses.
- **Budget Planning**: Create and manage budgets to ensure you stay on track with your financial goals.
- **Financial Reports**: Generate detailed financial reports to gain insights into your spending habits.

## Getting Started

To get started with FreeAccounting, follow these steps:

To be updated...

## Architecture
```plaintext 
+----------------+       +---------------------+       +----------------+
|                |       |                     |       |                |
|    Next.js     +------->  ASP.NET Core API   +------->     MinIO      |
|  (Frontend)    |       |   (Backend)         |       |  (Storage)     |
|                |       |                     |       |                |
+----------------+       +---------------------+       +----------------+
        ^                          ^                     ^
        |                          |                     |
        |                          |                     |
        +--------------------------+                     |
                 DTOs                                    |
                                                        \|/
                                                  +----------------+
                                                  |                |
                                                  |   PostgreSQL   |
                                                  |   (Database)   |
                                                  |                |
                                                  +----------------+
```

## License

FreeAccounting is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.



Thank you for using FreeAccounting! We hope it helps you achieve your financial goals.
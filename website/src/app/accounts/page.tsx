'use client'

import MyButton from "@/components/MyButton";
import MyTable from "@/components/MyTable";
import { TransactionDTO } from "@/models/Transaction/transactionDTO";

const accounts: TransactionDTO[] = [
    { id: "1", accountId: "Account 1", amount: 100, description: "Account 1 description" },
    { id: "2", accountId: "Account 2", amount: 200, description: "Account 2 description" },
    { id: "3", accountId: "Account 3", amount: 300, description: "Account 3 description" },
    { id: "4", accountId: "Account 4", amount: 400, description: "Account 4 description" },
    { id: "5", accountId: "Account 5", amount: 500, description: "Account 5 description" },
    { id: "6", accountId: "Account 6", amount: 600, description: "Account 6 description" },
    { id: "7", accountId: "Account 7", amount: 700, description: "Account 7 description" },
    { id: "8", accountId: "Account 8", amount: 800, description: "Account 8 description" },
    { id: "9", accountId: "Account 9", amount: 900, description: "Account 9 description" },
];


const columns = [
    { header: "Id", accessor: "id" },
    { header: "Account Id", accessor: "accountId" },
    { header: "Amount", accessor: "amount" },
    { header: "Description", accessor: "description" },
];

export default function AccountPage() {
    return (
        <div>
            <MyButton/>
            <MyTable columns={columns} data={accounts} title={"Transactions"} />
        </div>
    )
}
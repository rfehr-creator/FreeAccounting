'use client'

import MyTable from "@/components/MyTable";
import { AccountDTO } from "@/models/accountDTO";
const accounts: AccountDTO[] = [
    { id: "1", name: "Account 1", balance: 100, active: true, description: "This is account 1" },
    { id: "2", name: "Account 2", balance: 200, active: true, description: "This is account 2" },
    { id: "3", name: "Account 3", balance: 300, active: true, description: "This is account 3" },
];

const columns = [
    { header: "Name", accessor: "name" },
    { header: "Balance", accessor: "balance" },
    { header: "Active", accessor: "", render: (row: AccountDTO) => <div>{row.active ? "Yes" : "No"}</div> },
    { header: "Description", accessor: "description" },
];

export default function AccountPage() {
    return (
        <div>
            <MyTable columns={columns} data={accounts} title={"Accounts"} />
        </div>
    )
}
"use client";

import { Sidebar } from "flowbite-react";
import React from "react";
import { HiArrowSmRight, HiChartPie, HiHome, HiInbox, HiNewspaper, HiShoppingBag, HiTruck, HiUser, HiViewBoards } from "react-icons/hi";

export function MySidebar() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
        <Sidebar.Collapse icon={HiShoppingBag} label="Accounts">
            <Sidebar.Item href="/accounts">Chequing Account</Sidebar.Item>
            <Sidebar.Item href="/accounts">Savings Account</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="/reports" icon={HiChartPie}>
            Reports
          </Sidebar.Item>
          <Sidebar.Item href="/categories" icon={HiShoppingBag}>
            Categories
          </Sidebar.Item>
          <Sidebar.Item href="/settings" icon={HiNewspaper}>
            Settings
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

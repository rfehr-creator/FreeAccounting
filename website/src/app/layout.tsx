import type { Metadata } from "next";
import "./globals.css";
import { MySidebar } from "@/components/MySidebar";



export const metadata: Metadata = {
  title: "Free Accounting",
  description: "Free Accounting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`dark:bg-dark-background dark:text-dark-text`}>
        <div className="flex flex-row h-full">
          <div className="h-full">
            <MySidebar />
          </div>
          <div className="w-full p-2">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlowDesk Workspace",
  description: "Unified SaaS dashboard for distributed teams",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}

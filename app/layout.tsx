import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Empty landing page",
  description: "Remove this and write your own description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./providers/store-provider";

const geistSans = Nunito({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test Task",
  description: "Proggenius test task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}  antialiased`}>
        <StoreProvider>
          <div className="max-w-[1440px] mx-auto">{children}</div>
        </StoreProvider>
      </body>
    </html>
  );
}

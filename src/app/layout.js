import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ContratAe",
  description: "Plataforma de empregos",
  icon: "Component1.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/Component1.png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

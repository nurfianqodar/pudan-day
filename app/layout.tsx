import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pudan's Birthday 🥳",
  description: "Selamat ulang tahun yang ke-20 Diva Tari Asina Munthe",
  authors: [{ name: "Nurfian Qodar", url: "http://nurfian.vercel.app" }],
  icons: "🎂",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Menu />
      </body>
    </html>
  );
}

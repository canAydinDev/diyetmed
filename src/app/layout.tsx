import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import TopBar from "@/models/home/home-topbar/TopBar";
import FooterPage from "@/models/home/footer/FooterPage";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Diyetmed",
  description: "Sağlıklı Yaşam ve Beslenme Danışmanlığı | Mersin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <TopBar />

        {children}
        <FooterPage />
      </body>
    </html>
  );
}

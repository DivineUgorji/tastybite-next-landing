import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "TastyBite Foods",
  description:
    "Tasty Bite Foods is FUTO’s top destination for premium shawarma, burgers, cakes, club sandwiches, and super roll pastries. Quality ingredients, exceptional taste, every time. Visit us or order online for delicious, affordable fast food that hits the spot always.",
  icons: {
    icon: "/hambuger-favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

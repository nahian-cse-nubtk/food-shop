
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import CartProvider from "@/Context/CartProvider/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Food Shop",
  description: "This is a foond shop management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

      ><CartProvider>
        <div>

        <Navbar></Navbar>

         {children}
      </div>
      </CartProvider>

      </body>
    </html>
  );
}

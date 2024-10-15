import { Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { CartProvider } from "./_contexts/CartContext";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal"],
  variable: "--font-bebas-neue",
});

export const metadata = {
  title: "L.Kelly Limited - Fall into fashion",
  description:
    "From cozy sweaters that keep you warm on chilly days to chic outerwear that adds a touch of sophistication, our collection has everything you need to look and feel your best this season.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${bebas.variable}`}>
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}

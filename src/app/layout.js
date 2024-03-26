import { Inter, Shanti, Raleway, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const raleway = Raleway({subsets: ['latin'], weight: ['400', '700']})
export const shanti = Shanti({ subsets: ["latin"], weight: ['400'] });
export const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600'] });

export const metadata = {
  title: "Angely",
  description: "Business digitalitzation agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black overflow-hidden`}>{children}</body>
    </html>
  );
}

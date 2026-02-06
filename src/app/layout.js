import Header from "@/components/Header";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title:
    "Dr. Maya Reynolds, PsyD | Therapy for Anxiety, Trauma & Burnout in Santa Monica",
  description:
    "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica, CA, offering therapy for anxiety, trauma, burnout, and chronic stress. In-person and online therapy available across California.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-white text-slate-900 antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

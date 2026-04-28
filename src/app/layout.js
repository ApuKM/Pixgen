import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Pixgen",
  description: "Best AI photo gallery in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

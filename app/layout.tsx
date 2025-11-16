import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}

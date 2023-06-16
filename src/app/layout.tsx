import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Capture Events",
  description:
    "Easily access images from your events and photoshoots without stress and from the comfort of your home. Be in control. ",
  viewport: "width=device-width, initial-scale=1",
  keywords: [
    "group images",
    "group pictures",
    "organise event",
    "access pictures",
    "share pictures",
    "share event",
    "sell event tickets",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

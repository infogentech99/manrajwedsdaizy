import DisableInspect from "@/app/components/DisableInspect";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://manrajwedsdaizy1.vercel.app/"),

  openGraph: {
    title: "Manraj Singh Somal & Daizy Singh",
    description: "Join as they begin their forever. 28 & 30 October, 2026",
    url: "https://manrajwedsdaizy1.vercel.app/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Manraj Singh Somal & Daizy Singh ",
      }, 
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Manraj Singh Somal & Daizy Singh",
    description: "Join as they begin their forever. 28 & 30 October, 2026",
    images: ["/og.jpg"],
  },

 other: {
    "og:image:secure_url": "https://manrajwedsdaizy1.vercel.app/og.jpg",
    "og:image:type": "image/jpg",
  },


};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {/* <DisableInspect />  */}
        {children}
        
      </body>
    </html>
  );
}
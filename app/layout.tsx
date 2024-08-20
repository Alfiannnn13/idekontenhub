import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ToastProvider from "@/components/ToastProvider"; // Import ToastProvider

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CognifyVerse - IdeKontenHub",
  description:
    "CognifyVerse menyediakan alat AI untuk membuat konten, membangun resume, dan fitur AI lainnya untuk meningkatkan produktivitas.",
  openGraph: {
    type: "website",
    siteName: "Cognifyverse",
    title: "CognifyVerse - Platform AI",
    description:
      "CognifyVerse menyediakan alat AI untuk membuat konten, membangun resume, dan fitur AI lainnya.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "CognifyVerse Overview Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/icon.png" type="image/png" />
        </head>
        <body className={inter.className}>
          <ToastProvider> {/* Tambahkan ToastProvider */}
            {children}
          </ToastProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

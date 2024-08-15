import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CognifyVerse - IdeKontenHub",
  description:
    "CognifyVerse menyediakan alat AI untuk membuat konten, membangun resume, dan fitur AI lainnya untuk meningkatkan produktivitas.",
  openGraph: {
    type: "website",
    // locale: 'en_US',
    // url: 'https://www.cognifyverse.com/',
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
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>

          <main>
          {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

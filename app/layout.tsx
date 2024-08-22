import { ClerkProvider } from '@clerk/nextjs';
import { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CognifyVerse - IdeKontenHub',
  description: 'CognifyVerse menyediakan alat AI.',
  openGraph: {
    type: 'website',
    siteName: 'CognifyVerse',
    title: 'CognifyVerse - Platform AI',
    description: 'CognifyVerse menyediakan alat AI.',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'CognifyVerse Overview Image',
      },
    ],
  },
  authors: [{ name: 'Alfian', url: 'https://cognifyverse.netlify.app/' }],
  verification: {
    google: 'googlea370290fe86277da.html'
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/icon.png" type="image/png" />
          <script
            src="https://app.sandbox.midtrans.com/snap/snap.js"
            data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
            async
          ></script>
        </head>
        <body className={outfit.className}>{children} <ToastContainer/> </body>
      </html>
    </ClerkProvider>
  );
}

import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import Feature from "@/components/ui/feature"; // Ganti dengan path sebenarnya jika berbeda
import { Bolt, RefreshCw, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-full py-8 md:py-36 md:px-32 px-4 w-full items-center text-center gap-12 bg-white text-gray-900">
      {/* Header */}
      <header className="w-full py-4 bg-white shadow-md fixed top-0 left-0 z-10">
        <div className="container mx-auto px-4 flex justify-center md:justify-start">
        <Typography
          className="max-w-2xl text-2xl md:text-2xl font-bold leading-tight text-purple-500"
        >
          CognifyVerse
        </Typography>
        </div>
      </header>

      {/* Spacer for header */}
      <div className="h-2"></div>

      {/* Hero Section */}
      <div className="flex flex-col gap-6 items-center">
        <Image
          width={150}
          height={150}
          alt="CognifyVerse Logo"
          src="/icon.png" // Ganti dengan path gambar logo Anda
          className="object-contain"
        />
        <Typography className="max-w-2xl text-2xl md:text-4xl font-bold leading-tight mb-6">
          Tingkatkan Konten Anda dengan <br />
          <span className="text-blue-500">Ide KontenHub</span>
        </Typography>
        <Typography className="max-w-2xl text-base md:text-lg mb-8">
          Manfaatkan kekuatan AI untuk membuat, mengoptimalkan, dan mengelola konten Anda dengan mudah. Transformasikan strategi konten Anda dengan alat canggih kami.
        </Typography>
        <Link href="/sign-in">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 px-4 py-2 text-sm md:text-base">
            Mulai Sekarang
          </Button>
        </Link>
        <Image
          width={600}
          height={400}
          alt="CognifyVerse hero image"
          src="/hero.png"
          className=" mt-8 w-full max-w-4xl object-cover"
          unoptimized
        />
      </div>

      {/* Features Section */}
      <div className="flex flex-col pt-16 md:pt-24 md:gap-36 gap-16 items-center">
        <div className="flex flex-col gap-8 items-center">
          <Typography className="max-w-2xl text-3xl md:text-4xl font-bold mb-6">
            Fitur Unggulan Kami
          </Typography>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <Feature
              icon={<Bolt size={24} />}
              headline="Kekuatan AI Terkini"
              description="Gunakan alat AI kami untuk meningkatkan kualitas dan relevansi konten Anda dengan cepat dan mudah."
            />
            <Feature
              icon={<RefreshCw size={24} />}
              headline="Pengelolaan Konten"
              description="Optimalkan dan kelola konten Anda dengan alat yang dirancang untuk efisiensi dan efektivitas."
            />
            <Feature
              icon={<Shield size={24} />}
              headline="Keamanan Terjamin"
              description="Kami menjaga data Anda dengan langkah-langkah keamanan tingkat tinggi untuk memastikan privasi dan perlindungan."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

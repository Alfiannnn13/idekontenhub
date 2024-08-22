"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Confetti from "react-confetti";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const orderId = searchParams.get("orderId");

  useEffect(() => {
    if (!orderId) return;

    // Mengatur pengalihan ke halaman dashboard
    const timer = setTimeout(() => {
      router.push("/dashboard"); // Pastikan rute ini benar
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [orderId, router]);

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-[calc(100vh-180px)]">
      <Confetti width={2000} height={1000} />
      <Image
        src="/cupcoffee.png"  // Pastikan path ini sesuai dengan lokasi gambar di proyek Anda
        alt="Coffee"
        width={150}
        height={150}
        className="mb-6"
      />
      <h1 className="text-6xl text-purple-500 text-center">Terima Kasih!</h1>
      <h2 className="text-xl font-medium text-center justify-center">
        Dukungan Lo sangat berarti bagi Gue. 
      </h2>
    </div>
  );
};

export default SuccessPage;

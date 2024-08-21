"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Confetti from "react-confetti";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const orderId = searchParams.get("orderId");

  useEffect(() => {
    if (!orderId) return;

    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [orderId, router]);

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-[calc(100vh-180px)]">
      <Confetti width={2000} height={1000} />
      <h1 className="text-6xl text-purple-500">Terima Kasih!</h1>
      <h2 className="text-xl font-medium">
        Pembayaran Anda berhasil. Kami telah mengirimkan faktur ke email Anda.
      </h2>
      <h3 className="">Anda akan diarahkan ke halaman pesanan Anda...</h3>
    </div>
  );
};

export default SuccessPage;

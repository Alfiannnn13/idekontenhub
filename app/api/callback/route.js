// app/api/callback/route.js
import Midtrans from 'midtrans-client';

export async function POST(req) {
  try {
    const { order_id, transaction_status } = await req.json();

    // Log informasi callback
    console.log('Order ID:', order_id);
    console.log('Transaction Status:', transaction_status);

    // Verifikasi dan proses callback sesuai kebutuhan
    // Contoh: Update status transaksi di database
    // await updateTransactionStatus(order_id, transaction_status);

    // Response yang sukses
    return new Response(JSON.stringify({ status: 'success' }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error handling callback:', error);

    // Response yang gagal
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

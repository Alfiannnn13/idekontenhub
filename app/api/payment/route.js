// berhasil


// import Midtrans from 'midtrans-client';

// export async function POST(req) {
//   const { orderId, amount, itemDetails } = await req.json();

//   const snap = new Midtrans.Snap({
//     isProduction: false, // Ubah ke true jika di produksi
//     serverKey: process.env.MIDTRANS_SERVER_KEY,
//   });

//   try {
//     const transaction = await snap.createTransaction({
//       transaction_details: {
//         order_id: orderId,
//         gross_amount: amount,
//       },
//       item_details: itemDetails, // Kirim item_details di sini
//       customer_details: {
//         first_name: null, // Memaksa Midtrans untuk meminta input
//         email: null,
//         phone: null,
//       },
//       credit_card: {
//         secure: true,
//       },
//     });

//     return new Response(JSON.stringify({ token: transaction.token }), {
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }

// done

import Midtrans from 'midtrans-client';

export async function POST(req) {
  const { orderId, amount, itemDetails, customerDetails } = await req.json();

  const snap = new Midtrans.Snap({
    isProduction: true, // Ubah ke true jika di produksi
    serverKey: process.env.MIDTRANS_SERVER_KEY,
  });

  try {
    const transaction = await snap.createTransaction({
      transaction_details: {
        order_id: orderId,
        gross_amount: amount,
      },
      item_details: itemDetails,
      customer_details: {
        first_name: customerDetails.name,
        email: customerDetails.email,
        phone: customerDetails.phone,
      },
      credit_card: {
        secure: true,
      },
    });

    return new Response(JSON.stringify({ token: transaction.token }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

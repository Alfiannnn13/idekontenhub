// "use client"
// import { Button } from '@/components/ui/button'
// import React from 'react'
// import Image from 'next/image'



// async function handlePayment(amount: number) {
//   try {
//     const response = await fetch('/api/payment', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         orderId: `order_${Date.now()}`,
//         amount: amount,
//       }),
//     });

//     const data = await response.json();

//     if (data.token) {
//       const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
//       const myMidtransClientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!;

//       let scriptTag = document.createElement('script');
//       scriptTag.src = midtransScriptUrl;
//       scriptTag.setAttribute('data-client-key', myMidtransClientKey);
//       document.body.appendChild(scriptTag);

//       scriptTag.onload = () => {
//         window.snap.pay(data.token);
//       };
//     } else {
//       console.error('Payment failed:', data.error);
//     }
//   } catch (error) {
//     console.error('Payment error:', error);
//   }
// }

// function Coffee() {
//   return (
//     <div>
//       <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//         <h2 className='text-center font-bold text-3xl my-3 mb-10'>Buy Me a Coffee</h2>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:items-center md:gap-8">
//           <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-8">
//             <div className="text-center">
//               <h2 className="text-lg font-medium text-gray-900 mt-4">
//                 1 Cangkir
//               </h2>
//               <Image
//                 src="/cupcoffee.png"
//                 alt="Coffee Cangkir"
//                 width={150}
//                 height={150}
//                 className="mx-auto"
//               />

//               <p className="mt-2 sm:mt-4">
//                 <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">5.000 IDR</strong>
//               </p>
//             </div>

//             <div className="mt-6">
//               <Button
//                 onClick={() => handlePayment(5000)}
//                 className='w-full rounded-full mt-5 p-6 hover:bg-purple-500 hover:text-white'
//                 variant='outline'
//               >
//                 Support
//               </Button>
//             </div>
//           </div>
//           <div className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm sm:px-8 lg:p-12">
//             <div className="text-center">
//               <h2 className="text-lg font-medium text-gray-900 mt-4">
//                 5 Cangkir
//               </h2>
//               <Image
//                 src="/cupcoffee.png"
//                 alt="Coffee Cangkir"
//                 width={150}
//                 height={150}
//                 className="mx-auto"
//               />

//               <p className="mt-2 sm:mt-4">
//                 <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">20.000 IDR</strong>
//               </p>
//             </div>

//             <div className="mt-6">
//               <Button
//                 onClick={() => handlePayment(20000)}
//                 className='w-full rounded-full mt-5 p-6 hover:bg-purple-500 hover:text-white'
//                 variant='outline'
//               >
//                 Support
//               </Button>
//             </div>
//           </div>
//           <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-8">
//             <div className="text-center">
//               <h2 className="text-lg font-medium text-gray-900 mt-4">
//                 20 Cangkir
//               </h2>
//               <Image
//                 src="/cupcoffee.png"
//                 alt="Coffee Cangkir"
//                 width={150}
//                 height={150}
//                 className="mx-auto"
//               />

//               <p className="mt-2 sm:mt-4">
//                 <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">50.000 IDR</strong>
//               </p>
//             </div>

//             <div className="mt-6">
//               <Button
//                 onClick={() => handlePayment(50000)}
//                 className='w-full rounded-full mt-5 p-6 hover:bg-purple-500 hover:text-white'
//                 variant='outline'
//               >
//                 Support
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Coffee


// Berhasil 2
// "use client"
// import { Button } from '@/components/ui/button'
// import React from 'react'
// import Image from 'next/image'

// // Data produk dalam bentuk JSON
// const products = [
//   {
//     id: 1,
//     name: '1 Cangkir',
//     price: 5000,
//     imageUrl: '/cupcoffee.png'
//   },
//   {
//     id: 2,
//     name: '5 Cangkir',
//     price: 20000,
//     imageUrl: '/cupcoffee.png'
//   },
//   {
//     id: 3,
//     name: '20 Cangkir',
//     price: 50000,
//     imageUrl: '/cupcoffee.png'
//   }
// ]

// async function handlePayment(product:any) {
//   try {
//     const response = await fetch('/api/payment', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         orderId: `order_${Date.now()}`,
//         amount: product.price,
//         itemDetails: [
//           {
//             id: product.id.toString(), // ID produk
//             price: product.price,
//             quantity: 1, // Jumlah produk
//             name: product.name,
//           }
//         ]
//       }),
//     });

//     const data = await response.json();

//     if (data.token) {
//       const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
//       const myMidtransClientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!;

//       let scriptTag = document.createElement('script');
//       scriptTag.src = midtransScriptUrl;
//       scriptTag.setAttribute('data-client-key', myMidtransClientKey);
//       document.body.appendChild(scriptTag);

//       scriptTag.onload = () => {
//         window.snap.pay(data.token);
//       };
//     } else {
//       console.error('Payment failed:', data.error);
//     }
//   } catch (error) {
//     console.error('Payment error:', error);
//   }
// }

// function Coffee() {
//   return (
//     <div>
//       <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//         <h2 className='text-center font-bold text-3xl my-3 mb-10'>Buy Me a Coffee</h2>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:items-center md:gap-8">
//           {products.map(product => (
//             <div key={product.id} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-8">
//               <div className="text-center">
//                 <h2 className="text-lg font-medium text-gray-900 mt-4">
//                   {product.name}
//                 </h2>
//                 <Image
//                   src={product.imageUrl}
//                   alt={product.name}
//                   width={150}
//                   height={150}
//                   className="mx-auto"
//                 />

//                 <p className="mt-2 sm:mt-4">
//                   <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">{product.price.toLocaleString('id-ID')} IDR</strong>
//                 </p>
//               </div>

//               <div className="mt-6">
//                 <Button
//                   onClick={() => handlePayment(product)}
//                   className='w-full rounded-full mt-5 p-6 hover:bg-purple-500 hover:text-white'
//                   variant='outline'
//                 >
//                   Support
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Coffee


declare global {
  interface Window {
    snap: any;
  }
}
// tes
"use client";
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// Data produk dalam bentuk JSON
const products = [
  {
    id: 1,
    name: '1 Cangkir',
    price: 5000,
    imageUrl: '/cupcoffee.png'
  },
  {
    id: 2,
    name: '5 Cangkir',
    price: 20000,
    imageUrl: '/cupcoffee.png'
  },
  {
    id: 3,
    name: '20 Cangkir',
    price: 50000,
    imageUrl: '/cupcoffee.png'
  }
]

function Coffee() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const router = useRouter();

  const handlePayment = async () => {
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: `order_${Date.now()}`,
          amount: selectedProduct.price,
          itemDetails: [
            {
              id: selectedProduct.id.toString(),
              price: selectedProduct.price,
              quantity: 1,
              name: selectedProduct.name,
            }
          ],
          customerDetails,
        }),
      });

      const data = await response.json();

      if (data.token) {
        // const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
        const midtransScriptUrl = 'https://app.midtrans.com/snap/snap.js'; // URL untuk produksi
        const myMidtransClientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!;

        let scriptTag = document.createElement('script');
        scriptTag.src = midtransScriptUrl;
        scriptTag.setAttribute('data-client-key', myMidtransClientKey);
        document.body.appendChild(scriptTag);

        scriptTag.onload = () => {
          window.snap.pay(data.token, {
            onSuccess: function(result: { order_id: any; }) {
              const orderId = result.order_id;
              router.push(`/dashboard/coffee/success`);
            },
            onError: function() {
              console.error('Payment failed');
              // Handle payment failure
            },
            onPending: function() {
              console.log('Payment is pending');
              // Handle payment pending
            }
          });
        };
        // Close the modal after payment
        setShowModal(false);
      } else {
        console.error('Payment failed:', data.error);
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handlePayment();
  }
  return (
    <div>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className='text-center font-bold text-3xl my-3 mb-10'>Buy Me a Coffee</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:items-center md:gap-8">
          {products.map(product => (
            <div key={product.id} className="rounded-2xl bg-white border border-gray-200 p-6 transition-transform transform  hover:scale-105  hover:shadow-lg shadow-sm sm:px-8 lg:p-8">
              <div className="text-center">
                <h2 className="text-lg font-medium text-gray-900 hover:text-white mt-4">
                  {product.name}
                </h2>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="mx-auto"
                />

                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">{product.price.toLocaleString('id-ID')} IDR</strong>
                </p>
              </div>

              <div className="mt-6">
                <Button
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowModal(true);
                  }}
                  className='w-full rounded-full mt-5 p-6 hover:bg-purple-500 hover:text-white'
                  variant='outline'
                >
                  Support
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-10 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={customerDetails.name}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={customerDetails.email}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, email: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  value={customerDetails.phone}
                  onChange={(e) => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className='w-full rounded-full mt-5 p-6 hover:bg-purple-500 hover:text-white'
                  variant='outline'
                >
                  Proceed to Payment
                </Button>
              </div>
            </form>
            <Button
              onClick={() => setShowModal(false)}
              className='w-full rounded-full mt-5 p-6 hover:bg-red-500 hover:text-white'
              variant='outline'
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Coffee

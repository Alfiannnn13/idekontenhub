// components/ToastProvider.tsx
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS untuk toast

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ToastContainer
        position="bottom-right" // Posisi toast
        autoClose={3500} // Durasi toast muncul (ms)
        hideProgressBar={false} // Menampilkan progress bar
        newestOnTop={false} // Toast terbaru muncul di atas
        closeOnClick // Toast menghilang ketika di-klik
        rtl={false} // Arah toast
        pauseOnFocusLoss // Toast berhenti sementara ketika focus hilang
        draggable // Membuat toast bisa di-drag
        pauseOnHover // Toast berhenti sementara ketika di-hover
        theme="light" // Tema (light atau dark)
      />
    </>
  );
};

export default ToastProvider;

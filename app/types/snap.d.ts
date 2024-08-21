// types/snap.d.ts

declare module 'snap-js' {
    export interface SnapOptions {
      // Tipe opsi yang diterima oleh Snap.js
      onSuccess?: (result: SnapResult) => void;
      onPending?: (result: SnapResult) => void;
      onError?: (result: SnapResult) => void;
      onClose?: () => void;
    }
  
    export interface SnapResult {
      // Tipe properti yang mungkin ada pada result dari Snap.js
      status: string;
      order_id: string;
      transaction_id: string;
      transaction_status: string;
      payment_type?: string;
      fraud_status?: string;
      signature_key?: string;
      bank?: string;
      // Tambahkan properti lain yang sesuai dengan dokumentasi Snap.js
    }
  
    export interface Snap {
      pay(token: string, options?: SnapOptions): void;
    }
  
    // Mendeklarasikan bahwa `window.snap` dapat digunakan
    export interface Window {
      snap?: Snap;
    }
  }
  
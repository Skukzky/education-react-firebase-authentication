import React from "react";

// Di sini kita akan akan menggunakan hooks:
// - untuk mendeteksi user sudah login (useAuthState)
// - untuk memaksa navigasi bila user belum login dengan (useNavigate)
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

// Untuk bisa menggunakan useAuthState, kita membutuhkan auth dari authentication/firebase
import { auth } from "../authentication/firebase";

// Karena di sini akan nge-slot, maka harus menerima props children
const ProtectedComponent = ({ children }) => {
  // Kita gunakan hooksnya di sini
  const navigate = useNavigate();

  // Karena di sini kita hanya mengecek dari user, kita hanya gunakan [user] saja
  const [user] = useAuthState(auth);

  // Di sini kita akan membuat logic, apabila user tidak ada (null), maka akan kita
  // "paksa" ke halaman login
  if (!user) {
    navigate("/login");

    // Apabila tidak ada return kosong, maka akan terkena FOUC
    // Flash Of Unstyled Component
    // (Intinya halaman children akan terender sebentar - flashing)
    return;
  }

  // Apabila semua baik baik saja, kita akan mengembalikan children
  return children;
};

export default ProtectedComponent;

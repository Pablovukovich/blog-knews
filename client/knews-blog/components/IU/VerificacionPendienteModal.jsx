"use client";
import { useEffect } from "react";

export default function VerificacionPendienteModal({ email }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
  <div className="bg-[#1a0e13] text-white rounded-2xl p-6 shadow-xl max-w-md w-full text-center border border-pink-600">
    <h2 className="text-2xl font-bold text-pink-400 mb-2">
      ¡Cuenta no verificada!
    </h2>
    <p className="text-pink-200 mb-4">
      Hemos enviado un correo de verificación a{" "}
      <span className="font-semibold">{email}</span>.
    </p>
    <p className="text-sm text-pink-300">
      Por favor, verifica tu cuenta para comenzar a disfrutar de KNEWS.
    </p>
    <div className="mt-6">
      <p className="text-xs text-pink-400">
        Si no ves el correo, revisa tu carpeta de spam.
      </p>
    </div>
    <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-200">
      Reenviar correo de verificación
    </button>
  </div>
</div>

  );
}

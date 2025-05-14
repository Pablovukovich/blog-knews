"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/useAuthStore";

export default function AuthRedirect({ children, redirectTo = '/' }) {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuthStore();

  useEffect(() => {
    // Si está autenticado y ya cargó, redirige
    if (!loading && isAuthenticated) {
      router.push(redirectTo);
    }
  }, [loading, isAuthenticated, redirectTo]);

  // Mientras carga o está autenticado, no renderiza los children
  if (loading || isAuthenticated) return null;

  return children;
}

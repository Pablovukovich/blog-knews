"use client";
import Boton from "@/components/IU/Boton";
import useAuthStore from "@/store/useAuthStore";
import { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import { registerSchema } from "./../../schema/auth.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import AuthRedirect from "@/components/ProtectedRoutes/AuthRedirect";
import Link from "next/link";

const Register = () => {
  // Aquí puedes agregar la lógica para manejar el registro de usuarios
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const {
    register: registerUser,
    error: registerError,
    loading: registerLoading,
  } = useAuthStore();
  const router = useRouter();
  const [backendError, setBackendError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = async (data) => {
    try {
      setBackendError(null);
      const response = await registerUser(data);

      // setSuccessMessage("Registro exitoso. Verifica tu correo para activar tu cuenta.");
      // setTimeout(() => {
      //   router.push("/register/verificar-email");
      // }, 3000);

      setSuccessMessage("Registro exitoso.");
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (error) {
      setBackendError(error?.message || "Error al registrarse");
    }
  };

  return (
    <AuthRedirect>
      <div className="min-h-screen w-screen flex items-center bg-zinc-800">
        <div className="w-screen h-screen max-w-screen bg-zinc-800 rounded-xl overflow-hidden shadow-lg">
          <div className="flex w-screen h-screen">
            {/* Caja de imágenes (lado izquierdo) */}
            <div className="w-screen h-screen relative p-54">
              <img
                src="/knews-login.jpg"
                alt="Register background"
                className="w-full h-full object-cover absolute top-0 left-0"
              />
            </div>

            {/* Caja de formulario (lado derecho) */}
            <div className="w-full md:w-7xl p-54 flex flex-col justify-center items-center bg-zinc-800 text-white">
              <h2 className="text-4xl font-bold mb-6 text-center text-white">
                Crear cuenta
              </h2>

              <form
                className="w-full max-w-md"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  className="w-full p-3 mb-4 border border-gray-600 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  {...register("username")}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mb-2">
                    {errors.username.message}
                  </p>
                )}

                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full p-3 mb-4 border border-gray-600 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mb-2">
                    {errors.email.message}
                  </p>
                )}
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="w-full p-3 mb-6 border border-gray-600 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mb-2">
                    {errors.password.message}
                  </p>
                )}
                {backendError && (
                  <p className="text-red-500 mb-2">{backendError}</p>
                )}
                {successMessage && (
                  <p className="text-green-500 mb-2">{successMessage}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white rounded-md hover:bg-pink-500 transition duration-300"
                  disabled={isSubmitting || registerLoading}
                >
                  {isSubmitting || registerLoading
                    ? "Registrando..."
                    : "Crear cuenta"}
                </button>
              </form>

              <p className="mt-4 text-center text-white">
                ¿Ya tienes una cuenta?{" "}
                <Link href="/login" className="text-primary hover:underline">
                  Inicia sesión
                </Link>
              </p>
              <Boton texto="Volver" link="/" />
            </div>
          </div>
        </div>
      </div>
    </AuthRedirect>
  );
};

export default Register;

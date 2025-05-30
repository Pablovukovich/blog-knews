"use client";
import Boton from "@/components/IU/Boton";
import useAuthStore from "@/store/useAuthStore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {loginSchema} from "./../../schema/auth.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import AuthRedirect from "@/components/ProtectedRoutes/AuthRedirect";
import Link from "next/link";

export default function Login() {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const{login, error: loginError, loading: loginLoading } = useAuthStore()
  const router = useRouter();
  const [backendError, setBackendError] = useState(null);



  const onSubmit = async (data) => {
    try {
      setBackendError(null);
      const response = await login(data);
      if (response?.success) {
        setBackendError(null);
        setTimeout(() => {
          router.push('/'); // Redirige a la página principal después del login exitoso
        }, 1000); // Espera 1 segundo antes de redirigir
       
      } else {
        setBackendError(response?.message || 'Error al iniciar sesión');
      }
    } catch (err) {
      setBackendError(err?.message || 'Error al iniciar sesión');
    }
  };


  return (
    <AuthRedirect>
      <div className="min-h-screen w-screen flex items-center  bg-zinc-800 ">
        <div className="w-screen h-screen max-w-screen bg-zinc-800 rounded-xl overflow-hidden shadow-lg">
          <div className="flex w-screen  h-screen">
            {/* Caja de imágenes (lado izquierdo) */}
            <div className="w-screen h-screen relative p-54">
              <img
                src="/knews-login.jpg"
                alt="Login background"
                className="w-full h-full object-cover absolute top-0 left-0"
              />
            </div>

            {/* Caja de formulario (lado derecho) */}
            <div className="w-full md:w-7xl p-54 flex flex-col justify-center items-center bg-zinc-800 text-white">
              <h2 className="text-4xl font-bold mb-6 text-center text-white">
                Iniciar sesión
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                
                
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full p-3 mb-4 border border-gray-600 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  {...register('email')}
                  />
                  {errors.email && 
                  (<p className="text-red-500 text-sm mb-2">{errors.email.message}</p>)}
                  


                <input
                  type="password"
                  placeholder="Contraseña"
                  className="w-full p-3 mb-2 border border-gray-600 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  {...register('password')}
                />
                {errors.password && 
                (<p className="text-red-500 text-sm mb-2">{errors.password.message}</p>)}
                {backendError &&
                <p className="text-red-500 text-sm mb-2">{backendError}</p>}  
                
                <Link href="/forgot-password">
                  <p className="text-sm text-gray-400 hover:text-primary cursor-pointer mb-6">
                    ¿Olvidaste tu contraseña?
                  </p>
                </Link>
                

                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-white rounded-md hover:bg-pink-500 transition duration-300"
                  disabled={isSubmitting || loginLoading}
                >

                  {isSubmitting || loginLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                </button>
              </form>

              <p className="mt-4 text-center text-white">
                ¿No tienes cuenta?
                <Link href="/register" className="text-primary hover:underline">
                  Regístrate
                </Link>
              </p>
              <Boton texto="Volver" link="/" />
            </div>
          </div>
        </div>
      </div>

    </AuthRedirect>

    
  );
}
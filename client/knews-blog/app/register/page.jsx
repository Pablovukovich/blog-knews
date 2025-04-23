import Boton from "@/components/IU/Boton";

const Register = () => {
    return (
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
    
            <form className="w-full max-w-md">
              <input
                type="text"
                placeholder="Nombre de usuario"
                className="w-full p-3 mb-4 border border-gray-600 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
    
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full p-3 mb-4 border border-gray-600 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
    
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full p-3 mb-6 border border-gray-600 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
    
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white rounded-md hover:bg-pink-500 transition duration-300"
              >
                Registrarse
              </button>
            </form>
    
            <p className="mt-4 text-center text-white">
              ¿Ya tienes una cuenta?{" "}
              <a href="/login" className="text-primary hover:underline">
                Inicia sesión
              </a>
            </p>
          <Boton texto="Volver" link="/" />
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default Register;
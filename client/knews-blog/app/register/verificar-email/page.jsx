export default function VerificarEmail(){
    return(
        <>
            <div className="min-h-screen w-screen flex items-center bg-zinc-800">
  <div className="w-screen h-screen max-w-screen bg-zinc-800 rounded-xl overflow-hidden shadow-lg">
    <div className="flex w-screen h-screen">
      {/* Caja de imágenes (lado izquierdo) */}
      <div className="w-1/2 h-full relative">
        <img
          src="/knews-login.jpg"
          alt="Verification background"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
      </div>

      {/* Caja de formulario (lado derecho) */}
      <div className="w-1/2 h-full px-12 flex flex-col justify-center items-center bg-zinc-800 text-white">
        <h2 className="text-4xl font-bold mb-6 text-center text-white">
          Verifica tu correo
        </h2>

        <p className="mb-6 text-center text-gray-300">
          Ingresá el código que te enviamos a tu correo electrónico
        </p>

        <form className="w-full max-w-md">
          <input
            type="text"
            placeholder="Código de verificación"
            className="w-full p-3 mb-6 border border-gray-600 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-center tracking-widest"
          />

          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-md hover:bg-pink-500 transition duration-300"
          >
            Verificar código
          </button>
        </form>

        <p className="mt-4 text-center text-white">
          ¿No recibiste el código?{" "}
          <a href="#" className="text-primary hover:underline">
            Reenviar
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
        
        </>


    )


}
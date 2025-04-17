import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function SideRedes  () {
    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h2 className="text-xl font-semibold mb-4">Síguenos en redes</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 text-3xl hover:text-pink-600 transition duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-500 text-3xl hover:text-blue-600 transition duration-300" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-red-500 text-3xl hover:text-red-600 transition duration-300" />
          </a>
        </div>
        <button className="bg-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-600 transition duration-300">
          Únete a Knews
        </button>
      </div>
    );
  }


import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
export const RedesSociales = () => {
  return (
    <>
        <div className="lg:row-span-3 lg:col-start-4 lg:row-start-4 items-center text-center">
          <div className="bg-zinc-900 lg:row-span-3 lg:col-start-4 lg:row-start-4 rounded-2xl p-4 flex flex-col justify-between text-white">
            {/* Redes sociales */}
            <div className="flex flex-col items-center border-b-1 border-t-1 py-4 ">
              <h3 className="text-lg font-bold mb-3 ">Seguinos</h3>
              <div className="flex gap-4 items-center text-center justify-center ">
                <a
                  href="https://www.instagram.com/knews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#dd9faf] transition"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://twitter.com/knews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#dd9faf] transition"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://www.youtube.com/@knews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#dd9faf] transition"
                >
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>

            {/* Sponsors */}
            <div className=" border-b-1 py-4">
              <h3 className="text-lg font-bold mb-2">Sponsors</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>YG Entertainment</li>
                <li>Interscope Records</li>
                <li>Samsung Music</li>
              </ul>
            </div>
          </div>
        </div>
    </>
  )
}

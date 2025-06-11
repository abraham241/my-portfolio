import React from "react";
import Image from "next/image";

export default function Stack() {
  return (
    <div>
      <section className="bg-black">
        <div className="text-3xl text-center font-bold text-white pt-3">
          <p>Mes Stacks</p>
        </div>
        <div className="w-full py-10 px-4 md:px-10">
          <div className="flex flex-row justify-center md:grid md:grid-rows-2 md:grid-cols-5 gap-8">
            {/* Colonne gauche (mobile) / Ligne 1 (desktop) */}
            <div className="flex flex-col gap-8 md:contents">
              {/* HTML */}
              <div className="flex justify-center">
                <div className="p-1 rounded-xl border-2 border-transparent bg-gradient-to-br from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                  <div className="bg-black rounded-lg p-2">
                    <Image
                      src="/logos/html.png"
                      alt="HTML"
                      width={70}
                      height={70}
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </div>

              {/* CSS */}
              <div className="flex justify-center">
                <div className="p-1 rounded-xl border-2 border-transparent bg-gradient-to-br from-pink-400 to-purple-500 hover:from-pink-300 hover:to-purple-400 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                  <div className="bg-black rounded-lg p-2">
                    <Image
                      src="/logos/CSS.png"
                      alt="CSS"
                      width={50}
                      height={50}
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </div>

              {/* JavaScript */}
              <div className="flex justify-center">
                <div className="p-1 rounded-xl border-2 border-transparent bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                  <div className="bg-black rounded-lg p-2">
                    <Image
                      src="/logos/JS.png"
                      alt="JavaScript"
                      width={80}
                      height={80}
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </div>

              {/* React */}
              <div className="flex justify-center">
                <div className="p-1 rounded-xl border-2 border-transparent bg-gradient-to-br from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                  <div className="bg-black rounded-lg p-2">
                    <Image
                      src="/logos/REACT.png"
                      alt="React"
                      width={100}
                      height={100}
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </div>

              {/* Next.js */}
              <div className="flex justify-center">
                <div className="p-1 rounded-xl border-2 border-transparent bg-gradient-to-br from-gray-300 to-gray-500 hover:from-white hover:to-gray-400 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                  <div className="bg-black rounded-lg p-2">
                    <Image
                      src="/logos/Next.png"
                      alt="Next.js"
                      width={70}
                      height={60}
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite (mobile) / Ligne 2 (desktop) */}
            <div className="flex flex-col gap-8 md:contents ml-4">
              {/* Firebase */}
              <div className="flex justify-center">
                <div className="p-1 rounded-xl border-2 border-transparent bg-gradient-to-br from-orange-400 to-yellow-500 hover:from-orange-300 hover:to-yellow-400 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                  <div className="bg-black rounded-lg p-2">
                    <Image
                      src="/logos/Firebase.png"
                      alt="Firebase"
                      width={90}
                      height={90}
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </div>

              {/* SQL */}
              <div className="flex justify-center">
                <div className="p-1 rounded-xl border-2 border-transparent bg-gradient-to-br from-green-400 to-emerald-600 hover:from-green-300 hover:to-emerald-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                  <div className="bg-black rounded-lg p-2">
                    <Image
                      src="/logos/sql.png"
                      alt="SQL"
                      width={140}
                      height={90}
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </div>

              {/* Figma */}
              <div className="flex justify-center">
                <div className="p-1 rounded-xl border-2 border-transparent bg-gradient-to-br from-pink-400 to-fuchsia-600 hover:from-pink-300 hover:to-fuchsia-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                  <div className="bg-black rounded-lg p-2">
                    <Image
                      src="/logos/figma.png"
                      alt="Figma"
                      width={120}
                      height={120}
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </div>

              {/* n8n */}
              <div className="flex justify-center">
                <div className="p-1 rounded-xl border-2 border-transparent bg-gradient-to-br from-lime-400 to-green-500 hover:from-lime-300 hover:to-green-400 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                  <div className="bg-black rounded-lg p-2">
                    <Image
                      src="/logos/n8n.jpeg"
                      alt="n8n"
                      width={80}
                      height={80}
                      layout="intrinsic"
                      className="rounded-sm"
                    />
                  </div>
                </div>
              </div>

              {/* WordPress */}
              <div className="flex justify-center">
                <div className="p-1 rounded-xl border-2 border-transparent bg-gradient-to-br from-blue-400 to-indigo-600 hover:from-blue-300 hover:to-indigo-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                  <div className="bg-black rounded-lg p-2">
                    <Image
                      src="/logos/WORDPRESS.png"
                      alt="WordPress"
                      width={90}
                      height={90}
                      layout="intrinsic"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

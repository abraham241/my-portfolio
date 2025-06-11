"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Button } from "@/components/ui/button";
import Stack from "./components/Stack";
import Portfolio from "./components/Portfolio";
import Image from "next/image";
import Sect from "./components/sect";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="pt-16">
        <Sect />
      </div>
      {/* a mon propos */}
      <section className="flex-col flex justify-center items-center md:flex-row px-5 md:px-20 gap-10">
        <div className="flex justify-center  items-center  m-10 ">
          <Image
            src="/Ab.png"
            alt="Destination Icon"
            width={400}
            height={500}
            className="rounded-full"
          />
        </div>
        <div className="w-1/2 ">
          <div className="py-2 ">
            <h1 className="text-4xl font-bold py-2 ">A mon propos</h1>
          </div>
          <div className="text-2xl w-full">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis ipsa illo perspiciatis quod libero, totam nemo
              natus necessitatibus rerum aliquid consequuntur voluptates. Eum ex
              perspiciatis error, aliquam ullam nobis harum suscipit
              voluptatibus illum reprehenderit pariatur minus consequatur, animi
              iusto fuga numquam placeat minima dolorum doloremque laboriosam
              unde! Tempore, beatae praesentium ut quos incidunt impedit eius
              dolorem enim repellendus in.
            </p>
          </div>
        </div>
      </section>
      {/* a mon propos */}
      {/* mes stack */}
      <Stack />
      {/* mes stack */}

      {/* Portfolio */}
      <Portfolio />
      {/* Portfolio */}

      {/* <Footer /> */}
      <Footer />
    </>
  );
}

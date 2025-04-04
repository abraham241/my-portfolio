import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="relative bg-center bg-no-repeat bg-cover h-[650px] py-10 flex items-center justify-center"
        style={{
          backgroundImage: "url('/Abraham.jpeg')",
        }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-sky-950 bg-opacity-25"></div>

        {/* Contenu */}
        <div className="relative z-10 text-center text-white max-w-3xl px-8">
          <h1 className="md:text-3xl text-2xl">Mbolo samba</h1>
          <h2 className="md:text-5xl mt-2">Je suis Abraham</h2>
          <span className="md:text-4xl text-sky-400 font-bold block mt-4">
            Développeur Web Front-End & Entrepreneur Web
          </span>
          <p className="text-lg text-gray-300 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            dolorem illo, ducimus. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum
            unde asperiores.
          </p>
          <Button className="h-12 w-32 bg-sky-600 hover:bg-sky-700 rounded mt-8 text-white text-lg">
            Mon CV
          </Button>
        </div>
      </div>
      {/* <Footer /> */}
      <Footer />
    </>
  );
}

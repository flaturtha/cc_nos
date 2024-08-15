import Navbar from "../components/Navbar_old";

const HomePage = () => {
  
  return (
    <div className="font-breamcatcher bg-gray-900 text-white">
      <Navbar />
      <div
        className="hero h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/mob_v3_naked.png')`,
        }}
      >
        <style>{`
          @media (min-width: 1024px) {
            .hero {
              background-image: url('/img-v2.png');
            }
          }
        `}</style>
        <div className="absolute inset-0 flex flex-col md:justify-center text-white p-4 sm:text-left sm:left-1/2 md:translate-x-[10%] max-w-2xl">
          <h1 className="font-bold text-center text-7xl md:text-8xl pt-24 md:pt-32 md:tracking-wide md:leading-none">
            Tales of Murder
          </h1>
          <h2 className="text-3xl italic text-center md:text-4xl lg:text-4xl tracking-wider md:tracking-widest lg:leading-none font-black mt-6 mb-16">
            For Readers With Time To Kill!
          </h2>
          <p className="text-2xl text-center sm:text-left md:text-3xl lg:text-4xl md:mt-12 md:tracking-widest md:leading-10">
            The best <span className="font-bold bg-white text-black px-2 tracking-widest">noir</span> fiction from the golden age of murder mystery & crime fiction.
          </p>
          <p className="text-massive my-12 tracking-wider font-black leading-hero">
            COMING SOON!
          </p>
          <p className="hidden font-mono text-sm bg-white bg-opacity-20 p-4 text-center">
            Bookmark this page:
            <span className="bg-black text-white px-2 py-1 rounded mx-1">CTRL</span> + D on Windows;
            <span className="bg-black text-white px-2 py-1 rounded mx-1">CMD</span> + D on Mac
          </p>
          <p className="uppercase text-sm mt-8 text-right">&copy; Tales of Murder Press</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

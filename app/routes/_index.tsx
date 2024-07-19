import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: "https://www.cdnfonts.com/breamcatcher.font" },
    { rel: "stylesheet", href: "/styles/global.css" }];
};

export default function Index() {
  return (
    <div className="relative h-screen w-screen">
      <img
        src="/img-v2.png"
        alt="a beautiful blonde woman looks over her shoulder at the figure of a man behind her with concern"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center text-white p-4 text-left left-1/2 translate-x-[10%] max-w-lg">
        <p className="text-lg md:text-5xl lg:text-4xl tracking-widest leading-loose">
          A Dead Body.<br />The Perfect Motive.<br />A Flimsy Alibi.
        </p>
        <p className="text-xl md:text-2xl lg:text-5xl tracking-widest leading-loose font-black mt-6 mb-16">
          Cold Blooded Killer or Innocent Patsy?
        </p>
        <p className="text-lg md:text-xl lg:text-4xl mt-4 tracking-wide leading-loose">
          The best <span className="bold">noir</span> fiction from the golden age of murder mystery & crime fiction.
        </p>
        <p className="text-4xl md:text-xl lg:text-8xl mt-6 tracking-wider font-black">
          COMING SOON!
        </p>
        <p className="uppercase text-sm mt-32">&copy; Tales of Murder Press</p>
      </div>
    </div>
  );
}

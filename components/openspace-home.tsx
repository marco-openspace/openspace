import Image from "next/image";
import Link from "next/link";
const config = require("../next.config");

const OpenspaceHome = () => {
  return (
    <div className="flex flex-col w-full justify-center px-8 text-center text-slate-300 antialiased">
      <h2 className="pb-4 text-2xl font-bold">Benvenuti a Openspace!</h2>
      <p>
        Openspace è un nuovo spazio fisico che si propone come luogo di
        aggregazione per appassionati di tecnologia e non a Milano.{" "}
      </p>

      <p className="pt-4">
        Per utilizzare lo spazio è necessaria l&apos;iscrizione a
        &quot;Openspace Associazione&quot; ed attenersi alle regole descritte
        nel regolamento dell&apos;associazione, disponibile in loco.
      </p>
      <p>Vieni a trovarci in Via Camillo Golgi 60, 20133 Milano!</p>
      <div className="md:flex md:py-4 md:justify-center">
        <div className="flex w-full items-center flex-col space-y-0 md:space-y-0 md:max-w-[280px] md:flex-row justify-center pt-4 pb-2 space-x-4 px-4">
          <Link
            href="https://discord.gg/GqnrGPNW"
            className="w-full flex items-center rounded-lg border-4 border-[#7289da] px-4 py-2 hover:bg-[#7289da] hover:bg-opacity-40"
          >
            {" "}
            <Image
              className="flex space-x-4 rounded-full border-white bg-[#7289da] p-3"
              src={`${config.basePath}/assets/images/discord-logo.svg`}
              alt="Discord Logo"
              width={60}
              height={60}
              priority
            />
            <p className="ml-4 text-sm">Unisciti su Discord</p>
          </Link>
        </div>
        <div className="flex w-full items-center flex-col space-y-0 md:space-y-0 md:max-w-[280px] md:flex-row justify-center pt-2 space-x-2 px-4">
          <Link
            href="https://form.jotform.com/carlonigiacomo/domanda-di-ammissione"
            className="w-full flex items-center rounded-lg border-4 border-slate-400 py-2 hover:bg-slate-600 hover:bg-opacity-40"
          >
            {" "}
            <Image
              className="mx-1 flex space-x-0 rounded-lg border-white bg-black"
              src={`${config.basePath}/assets/images/icon.png`}
              alt="Jotform"
              width={60}
              height={60}
              priority
            />
            <p className="ml-1 text-sm text-slate-300">
              Unisciti all'associazione
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpenspaceHome;

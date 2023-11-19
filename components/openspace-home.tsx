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
      <p>
        Per utilizzare lo spazio è necessaria l&apos;iscrizione a
        &quot;Openspace Associazione di Promozione Sociale&quot; ed attenersi
        alle regole descritte nel regolamento dell&apos;associazione,
        disponibile in loco.
      </p>
      <p>Vieni a trovarci in Via Camillo Golgi 60, 20133 Milano!</p>
      <div className="flex w-full justify-center py-8">
        <Link
          href="https://discord.gg/GqnrGPNW"
          className="flex items-center rounded-lg border-4 border-[#7289da] px-4 py-2 hover:bg-[#7289da] hover:bg-opacity-40"
        >
          {" "}
          <Image
            className="mx-auto flex space-x-4 rounded-full border-white bg-[#7289da] p-3"
            src={`${config.basePath}/assets/images/discord-logo.svg`}
            alt="Discord Logo"
            width={60}
            height={60}
            priority
          />
          <p className="ml-4 text-sm">Unisciti su Discord</p>
        </Link>
      </div>
    </div>
  );
};

export default OpenspaceHome;

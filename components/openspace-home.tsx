import Image from "next/image";
import Link from "next/link";
const config = require("../next.config");

const OpenspaceHome = () => {
  return (
    <div className="flex flex-col w-full justify-center px-8 text-center text-slate-300 antialiased">
      <h2 className="pb-4 text-4xl font-bold">Benvenuti a Openspace!</h2>
      <section className="flex justify-center">
        <div className="max-w-4xl">
          <p>
            Openspace è un laboratorio collaborativo guidato dalla comunità, in
            cui persone curiose di tutti i livelli di competenza possono
            esplorare, imparare e creare utilizzando strumenti e conoscenze
            condivise.
          </p>

          <p className="pt-4">
            Openspace è attualmente accessibile "anteprima" in Via Golgi, 60.
            Stiamo lavorando duramente per preparare lo spazio per le attività
            regolari al più presto! Iscriviti{" "}
            <Link
              href="https://forms.gle/asJs8yhPZ8E92veT8"
              className="underline"
            >
              qui
            </Link>{" "}
            per diventare un membro e ricevere notizie sul nostro progresso e i
            prossimi eventi.
          </p>
          <p className="pt-4">
            {" "}
            Contiamo sulla nostra comunità per crescere e sostenerci, quindi ti
            preghiamo di considerare la possibilità di fare una donazione (non
            solo denaro, ma anche tempo, materiali o strumenti) per aiutare
            Openspace a diventare lo spazio comunitario florido che immaginiamo!{" "}
            <Link href={`${config.basePath}/contattaci`} className="underline">
              Contattaci{" "}
            </Link>
            per saperne di più.
          </p>
        </div>
      </section>
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
            href="https://forms.gle/asJs8yhPZ8E92veT8"
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

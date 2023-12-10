import Image from "next/image";
import Link from "next/link";
const config = require("../next.config");

const Contattaci = () => {
  return (
    <div className="flex flex-col w-full justify-center px-8 text-center text-slate-300 antialiased">
      <h2 className="text-4xl font-bold">Contattaci</h2>
      <div className="flex justify-center">
        <div className="max-w-md">
          <p className="pt-4">
            Contattaci via email all'indirizzo:{" "}
            <Link href="mailto:info@lab-open.space" className="underline">
              info@lab-open.space
            </Link>
          </p>
          <p className="pt-4">
            Seguici su Instagram:{" "}
            <Link
              href="https://instagram.com/lab_open.space"
              className="underline"
            >
              @lab_open.space
            </Link>
          </p>
          <p className="pt-4">
            {" "}
            Vieni a trovarci a Milano in Via Camillo Golgi, 60! Siamo
            all'interno del cortile, scendendo le scale a sinistra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contattaci;

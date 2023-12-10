import Image from "next/image";
import Link from "next/link";
const config = require("../next.config");

const Membership = () => {
  const borderStyles = "border-solid border-white border-2 p-3";
  return (
    <div className="flex flex-col w-full justify-center px-8 text-center text-slate-300 antialiased space-y-5">
      <h2 className="text-4xl font-bold">Membership</h2>
      <p>
        Chiunque è il benvenuto a diventare membro e contribuire alla comunità.
        Ci sono tre livelli di adesione: Supporter, Core e Founder.
      </p>

      <div className="flex justify-center">
        <table className={`${borderStyles} max-w-4xl`}>
          <tbody className="">
            <tr className="text-3xl font-bold grid grid-cols-3">
              <td className={borderStyles}>Supporter</td>
              <td className={borderStyles}>Core</td>
              <td className={borderStyles}>Fondatore</td>
            </tr>
            <tr className="grid grid-cols-3 items-center">
              <td
                className={`${borderStyles} h-full border-t-0 border-b-0 col-span-1`}
              >
                Una membership Supporter è di €15 all'anno e consente ai membri
                di partecipare agli incontri, nonché di accedere alle
                informazioni sullo spazio e sulla sua comunità.
              </td>
              <td
                className={`${borderStyles} h-full border-t-0 border-b-0 col-span-1`}
              >
                Una membership Core è di 50€ all'anno (35€ per coloro che hanno
                25 anni o meno) e consente inoltre ai membri di prenotare e
                utilizzare lo spazio e gli strumenti (dopo la certificazione)
                liberamente durante gli orari di apertura. Possono anche votare
                nell'assemblea dei membri e cercare l'approvazione per proporre
                e organizzare i propri eventi, workshop e altre attività da
                svolgere nello spazio.
              </td>
              <td
                className={`${borderStyles} h-full border-t-0 border-b-0 col-span-1`}
              >
                I membri Fondatori (75€ all'anno) hanno tutti i diritti dei
                membri Supporter e Core, ma possono organizzare eventi, workshop
                e altre attività senza preventiva approvazione. Possono anche
                partecipare al processo di approvazione delle attività in linea
                con lo spirito dell'associazione e hanno il diritto di essere
                nominati al consiglio di amministrazione.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="pt-4">ZZZZZZZ</p>
      <div className="md:flex md:py-4 md:justify-center"></div>
    </div>
  );
};

export default Membership;

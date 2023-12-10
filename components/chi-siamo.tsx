import Image from "next/image";
import Link from "next/link";
const config = require("../next.config");

const ChiSiamo = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center px-8 text-start text-slate-300 antialiased">
      <div className="max-w-2xl flex flex-col space-y-3 text-justify">
        <h2 className="text-4xl font-bold text-center py-4">Cosa facciamo</h2>
        <h4>Orari di Apertura </h4>
        <p>
          {" "}
          Il laboratorio è aperto! I membri possono entrare e iniziare a
          esplorare, creare e imparare utilizzando gli strumenti, le conoscenze
          e le competenze della comunità.{" "}
        </p>
        <h4>Progetti</h4>{" "}
        <p>
          Speriamo che i membri della comunità possano partecipare a vari
          progetti collaborativi in corso che suscitino il loro interesse o
          offrano loro la possibilità di utilizzare nuove abilità.
        </p>{" "}
        <h4>Incontri</h4>
        <p>
          I regolari incontri offrono alla comunità l'opportunità di presentare
          il proprio lavoro, discutere vari argomenti di interesse o imparare
          qualcosa di nuovo da ospiti speciali.
        </p>{" "}
        <h4>Corsi</h4>
        <p>
          Saranno offerti corsi regolari programmabili da esperti, incentrati
          sull'acquisizione di esperienza pratica e sull'incoraggiamento alla
          libertà nell'esplorazione di vari argomenti.
        </p>
        <h4>Workshop</h4>
        <p>
          I workshop offriranno ai membri della nostra comunità l'opportunità di
          provare qualcosa di nuovo e scoprire abilità inesplorate che potranno
          applicare in altri contesti.
        </p>
        <h4>Lezioni Personalizzate</h4>
        <p>
          I membri della comunità potrebbero avere una specifica area di
          conoscenza che desiderano sviluppare e potranno essere abbinati a un
          esperto in grado di concentrarsi sulle loro esigenze e obiettivi
          specifici.
        </p>
        <h4>Mostre</h4>
        <p>
          Lo spazio stesso mostrerà una serie di progetti in varie fasi di
          sviluppo, e mostre curate metteranno in evidenza lavori di particolare
          interesse.
        </p>
      </div>
      <div className="max-w-2xl flex flex-col space-y-3 pt-8 text-justify">
        <h2 className="text-4xl font-bold text-center py-4">
          I nostri valori e obiettivi
        </h2>
        <p>
          La comunità di Openspace è multidisciplinare, multigenerazionale,
          multilingue e multiculturale, e condividiamo un insieme di obiettivi e
          valori che guida tutte le nostre attività e lo sviluppo nello spazio e
          oltre. Questi obiettivi e valori sono destinati a crescere ed
          evolversi con noi, quindi potrebbero essere aggiornati di tanto in
          tanto.
        </p>
        <ul className="list-disc flex flex-col space-y-3">
          <li>
            La nostra comunità è dedicata all'avanzamento della conoscenza
            personale e collettiva attraverso sperimentazione, osservazione,
            apprendimento, insegnamento, condivisione e mentoring.
          </li>
          <li>
            Valorizziamo la diversità e le diverse modalità di pensiero e
            conoscenza. Ci aspettiamo che i membri della nostra comunità
            provengano da sfondi diversi, abbiano interessi ed expertise
            differenti e siano disposti a condividerli con gli altri.
          </li>
          <li>
            Ci sforziamo di aumentare l'accessibilità allo spazio e alla
            comunità, e valutiamo regolarmente come la nostra immagine, gli
            strumenti, la disposizione e la programmazione riflettano e servano
            i membri della comunità.
          </li>
          <li>
            Cerchiamo di stabilire connessioni sia all'interno della comunità
            che all'esterno con altre comunità di apprendimento, con l'obiettivo
            di rimanere aggiornati e avanguardisti nella nostra comprensione del
            mondo.
          </li>
          <li>
            Riconosceremo e trarremo ispirazione dalla storia culturale e
            intellettuale del luogo in cui siamo situati: Milano, Italia e
            Europa, nonché dalle culture che compongono la nostra comunità,
            partecipando e contribuendo sia a livello locale che globale.
          </li>
          <li>
            Il nostro obiettivo è essere trasparenti riguardo ai nostri metodi e
            processi nella speranza che ci sia sempre un percorso per
            comprendere come funziona qualcosa.{" "}
          </li>
        </ul>
      </div>
      <div className="md:flex md:py-4 md:justify-center"></div>
    </div>
  );
};

export default ChiSiamo;

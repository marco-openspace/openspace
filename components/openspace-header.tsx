import Image from "next/image";
const config = require("../next.config");

const OpenspaceHeader = () => {
  return (
    <div className="flex w-full justify-center px-8 text-center text-slate-300 antialiased">
      <div className="mx-auto max-w-screen-lg">
        <header className="flex items-center justify-center p-5">
          <div className="relative w-full max-w-[1100px] ">
            <Image
              className="mx-auto mt-2"
              src={`${config.basePath}/assets/images/Openspace-Logo.svg`}
              alt="Openspace Logo"
              width={1100}
              height={120}
              priority
            />
          </div>
        </header>
      </div>
    </div>
  );
};

export default OpenspaceHeader;

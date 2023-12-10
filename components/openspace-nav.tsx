import Image from "next/image";
import Link from "next/link";
const config = require("../next.config");

const OpenspaceNav = () => {
  const linkStyle = "text-xl text-slate-300  w-full";
  return (
    <div className="flex w-full justify-center px-8 text-center text-slate-300 antialiased pb-8">
      <div className="mx-auto max-w-screen-lg">
        <div className="flex items-center justify-center">
          <div className="relative flex w-full max-w-[700px] rounded-lg border-2 border-slate-400">
            <Link
              href={`/`}
              className="w-40 flex items-center py-2 hover:bg-slate-600 hover:bg-opacity-40"
            >
              <p className={linkStyle}>Home</p>
            </Link>
            <Link
              href={`/chi-siamo`}
              className="w-40 flex items-center py-2 hover:bg-slate-600 hover:bg-opacity-40"
            >
              <p className={linkStyle}>Chi Siamo</p>
            </Link>
            <Link
              href={`/membership`}
              className="w-40 flex items-center py-2 hover:bg-slate-600 hover:bg-opacity-40"
            >
              <p className={linkStyle}>Membership</p>
            </Link>
            <Link
              href={`/contattaci`}
              className="w-40 flex items-center py-2 hover:bg-slate-600 hover:bg-opacity-40"
            >
              <p className={linkStyle}>Contattaci</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenspaceNav;

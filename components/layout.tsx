import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import OpenspaceHeader from "./openspace-header";
import OpenspaceNav from "./openspace-nav";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <OpenspaceHeader />
      <OpenspaceNav />
      <div className="min-h-screen relative">
        <main>{children}</main>
      </div>
      <footer className="w-full flex justify-center">
        <div className="border-t border-slate-400 text-slate-400 py-4 text-center text-sm w-[330px] md:w-[500px]">
          © Copyright {new Date().getFullYear()} {"Openspace"}.
        </div>
      </footer>
    </>
  );
};

export default Layout;

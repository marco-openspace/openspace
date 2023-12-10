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
      <div className="relative min-h-[calc(100vh-150px)]">
        <OpenspaceHeader />
        <OpenspaceNav />
        <main>{children}</main>
      </div>
      <footer className="w-full flex justify-center pt-10">
        <div className="border-t border-slate-400 text-slate-400 py-4 text-center text-sm w-[330px] md:w-[500px]">
          © Copyright {new Date().getFullYear()} {"Openspace"}
        </div>
      </footer>
    </>
  );
};

export default Layout;

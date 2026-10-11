import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="relative flex-grow flex flex-col">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_48px]"></div>
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]"></div>
          <div className="absolute right-0 top-40 h-[420px] w-[420px] translate-x-1/3 rounded-full bg-violet-500/15 blur-[120px]"></div>
        </div>
        <Navbar />
        <main id="main-content" className="relative z-10 flex-grow flex flex-col">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-2 text-center bg-slate-900/50 mt-10">
        © Sakti Sriraj Mishra
      </div>
    </div>
  );
};

export default AppLayout;
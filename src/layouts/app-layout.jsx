import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="py-10 px-20">
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>

      <div className="text-center text-slate-500">
        © Sakti Sriraj Mishra @ 2024
      </div>
    </div>
  );
};

export default AppLayout;
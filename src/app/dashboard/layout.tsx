import { Sidebar } from "../../components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-yellow-500 selection:text-white">
      <div className="flex flex-auto">
        <Sidebar />
        <div className="w-full text-slate-900">
        
          {children}
        </div>
      </div>
    </div>
  );
}

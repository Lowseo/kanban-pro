import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-gray-100 ">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}

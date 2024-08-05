import MainSection from "@/components/MainSection";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex w-full h-full">
      <Sidebar />
      <MainSection />
    </main>
  );
}

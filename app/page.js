import Download from "@/components/pages/Download";
import Hero from "@/components/pages/Hero";
import Info from "@/components/pages/Info";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-screen min-h-screen overflow-x-hidden">
      <Hero />
      <Info />
      <Download />
    </main>
  );
}

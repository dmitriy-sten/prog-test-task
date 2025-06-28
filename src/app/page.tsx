import { EmotionsGrid } from "@/features/emotions/ui/emotions-grid";
import { Header } from "@/shared/components/header";

export default function Home() {
  return (
    <main className="">
      <Header className="mt-3 lg:mt-30" />
      <EmotionsGrid />
    </main>
  );
}

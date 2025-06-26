import { AddEmotionDialog } from "@/features/emotions/ui/add-emotion-dialog";
import { EmotionsGrid } from "@/features/emotions/ui/emotions-grid";

export default function Home() {
  return (
    <main className=" w h-screen">
      <EmotionsGrid
      
      />
      <AddEmotionDialog />
    </main>
  );
}

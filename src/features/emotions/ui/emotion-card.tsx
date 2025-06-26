import { useEmotionsStore } from "@/app/providers/store-provider";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { cn } from "@/shared/lib/utils";
import { Trash2Icon } from "lucide-react";
import React from "react";
import { EmotionCardDto } from "../types";

interface Props {
  className?: string;
  item: EmotionCardDto;
  id:number
}

export const EmotionCard: React.FC<Props> = ({ className, item, id }) => {
  const { emotionsStore } = useEmotionsStore();

  return (
    <Card className="p-2 gap-1 items-center">
      <p>{item.emoji}</p>
      <h2 className="mb-2 font-semibold">{item.name}</h2>

      <p className="text-slate-500">{item.description}</p>

      <Button onClick={()=>emotionsStore.deleteCard(id)} className="bg-red-300">
        <Trash2Icon />
      </Button>
    </Card>
  );
};

"use client";

import { useEmotionsStore } from "@/app/providers/store-provider";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { Trash2Icon } from "lucide-react";
import { EmotionCardDto } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  className?: string;
  item: EmotionCardDto;
}

export const EmotionCard: React.FC<Props> = ({ className, item }) => {
  const { emotionsStore } = useEmotionsStore();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="p-2  gap-1 items-center group relative"
    >
      <p className="text-5xl">{item.emoji}</p>
      <h2 className="font-semibold">{item.name}</h2>

      <p className="text-slate-500 text-center whitespace-pre-wrap">
        {item.description}
      </p>

      <Button
        className="bg-red-300 absolute top-1 right-1 opacity-0 group-hover:opacity-100"
        onClick={() => emotionsStore.deleteCard(item.id)}
      >
        <Trash2Icon />
      </Button>
    </Card>
  );
};

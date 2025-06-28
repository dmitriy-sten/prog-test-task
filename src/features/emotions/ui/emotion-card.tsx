"use client";

import { useEmotionsStore } from "@/app/providers/store-provider";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { Trash2Icon } from "lucide-react";
import { EmotionCardDto } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { observer } from "mobx-react-lite";

interface Props {
  item: EmotionCardDto;
}

export const EmotionCard: React.FC<Props> = observer(({ item }) => {
  const { emotionsStore } = useEmotionsStore();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <Card
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{ backgroundColor: `${item.color}43`, ...style }}
      className="p-2  gap-1 h-full w-full items-center group relative "
    >
      <p className="text-5xl select-none ">{item.emoji}</p>
      <h2 className="font-semibold select-none">{item.name}</h2>
      <p className="text-slate-500 select-none text-center whitespace-pre-wrap">
        {item.description}
      </p>

      <Button
        className="hidden md:block z-10 bg-red-300 absolute top-1 right-1 opacity-0 group-hover:opacity-100 hover:bg-red-400"
        onClick={() => {
          console.log("click");
          emotionsStore.deleteCard(item.id);
        }}
      >
        <Trash2Icon />
      </Button>
    </Card>
  );
});

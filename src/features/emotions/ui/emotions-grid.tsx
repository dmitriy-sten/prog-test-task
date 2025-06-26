"use client";

import { useEmotionsStore } from "@/app/providers/store-provider";
import { cn } from "@/shared/lib/utils";

import { observer } from "mobx-react-lite";
import React from "react";
import { EmotionCard } from "./emotion-card";

import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

import { DraggbleWrapper } from "./draggble-wrapper";

interface Props {
  className?: string;
}

export const EmotionsGrid: React.FC<Props> = observer(({ className }) => {
  const { emotionsStore } = useEmotionsStore();

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldId = emotionsStore.emotionCards.findIndex(
        (item) => item.id === active.id
      );
      const newId = emotionsStore.emotionCards.findIndex(
        (item) => item.id === over.id
      );
      emotionsStore.serArray(
        arrayMove(emotionsStore.emotionCards, oldId, newId)
      );
    }
  };

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-4 gap-2 p-2", className)}>
      <DraggbleWrapper items={emotionsStore.emotionCards} onDragEnd={onDragEnd}>
        {emotionsStore.emotionCards.map((item) => (
          <EmotionCard key={item.id} item={item} />
        ))}
      </DraggbleWrapper>
    </div>
  );
});

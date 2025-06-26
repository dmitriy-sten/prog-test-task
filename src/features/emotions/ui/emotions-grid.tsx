"use client";

import { useEmotionsStore } from "@/app/providers/store-provider";
import { cn } from "@/shared/lib/utils";

import { observer } from "mobx-react-lite";
import React from "react";
import { EmotionCard } from "./emotion-card";

interface Props {
  className?: string;
}

export const EmotionsGrid: React.FC<Props> = observer(({ className }) => {
  const { emotionsStore } = useEmotionsStore();

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-4 gap-2 p-2", className)}>
      {[...emotionsStore.emotionCards.entries()].map(([id, item]) => (
        <EmotionCard key={id} item={item} id={id} />
      ))}
    </div>
  );
});

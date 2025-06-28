"use client";

import { useEmotionsStore } from "@/app/providers/store-provider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const EmotionsStatsTrigger: React.FC<Props> = observer(
  ({ className, children }) => {
    const { emotionsStore } = useEmotionsStore();
    const { emotionCards } = emotionsStore;
    const types = emotionCards.map((item) => item.type);
    const metrics: Record<string, number> = {};

    types.forEach((type) => {
      if (metrics[type]) {
        metrics[type] += 1;
      } else {
        metrics[type] = 1;
      }
    });

    return (
      <Popover>
        <PopoverTrigger className={className} asChild>
          {children}
        </PopoverTrigger>
        <PopoverContent>
          {Object.entries(metrics).map(([name, count]) => (
            <div key={name} className="flex justify-between border-b py-1">
              <div>{name}</div>
              <div className="text-slate-400">{count}</div>
            </div>
          ))}
        </PopoverContent>
      </Popover>
    );
  }
);

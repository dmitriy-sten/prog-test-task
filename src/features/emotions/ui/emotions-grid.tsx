"use client";

import { useEmotionsStore } from "@/app/providers/store-provider";
import { cn } from "@/shared/lib/utils";
import { observer } from "mobx-react-lite";
import React from "react";
import { EmotionCard } from "./emotion-card";
import { DraggbleWrapper } from "./draggble-wrapper";
import { Card } from "@/shared/components/ui/card";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AddEmotionDialogTrigger } from "./add-emotion-dialog-trigger";
import { useDragEvents } from "../model/use-drag-events";

interface Props {
  className?: string;
}

export const EmotionsGrid: React.FC<Props> = observer(({ className }) => {
  const { emotionsStore } = useEmotionsStore();
  const { onDragEnd, onDragMove } = useDragEvents();

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2",
        className
      )}
    >
      <DraggbleWrapper
        items={emotionsStore.emotionCards}
        onDragEnd={onDragEnd}
        onDragMove={onDragMove}
      >
        <AnimatePresence>
          {emotionsStore.emotionCards.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-2 bg-gray-100 rounded-xl shadow"
            >
              <EmotionCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
        <AddEmotionDialogTrigger>
          <Card className="flex gap-1 min-h-[180px] items-center cursor-pointer justify-center size-full hover:bg-gray-100 transition-all duration-300">
            <Plus size={50} className="text-slate-400" />
            <p className="text-slate-400 font-medium">Створити картку</p>
          </Card>
        </AddEmotionDialogTrigger>
      </DraggbleWrapper>
    </div>
  );
});

import { useIsMobile } from "@/shared/hooks/use-is-mobile";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { SortableContext } from "@dnd-kit/sortable";
import React from "react";
import { EmotionCardDto } from "../types";

interface Props {
  children: React.ReactNode;
  items: EmotionCardDto[];
  onDragEnd: (event: DragEndEvent) => void;
}

export const DraggbleWrapper: React.FC<Props> = ({
  children,
  onDragEnd,
  items,
}) => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return children;
  }
  return (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext items={items}>{children}</SortableContext>
    </DndContext>
  );
};

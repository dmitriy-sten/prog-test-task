"use client";

import { useIsMobile } from "@/shared/hooks/use-is-mobile";
import { DndContext, DndContextProps, DragEndEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import React from "react";
import { EmotionCardDto } from "../types";

interface Props extends DndContextProps {
  items: EmotionCardDto[];
}

export const DraggbleWrapper: React.FC<Props> = ({
  children,
  items,
  ...props
}) => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return children;
  }
  return (
    <DndContext {...props}>
      <SortableContext items={items}>{children}</SortableContext>
    </DndContext>
  );
};

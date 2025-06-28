"use client";
import React from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { useEmotionsStore } from "@/app/providers/store-provider";
import { Card } from "./ui/card";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const { emotionsStore } = useEmotionsStore();
  return (
    <header className={cn("p-2 ", className)}>
      <Card className="w-full flex-row p-2 items-center">
        <h1 className="text-4xl ">Create Your emoji</h1>
        <Button
          className="ml-auto bg-red-300 hover:bg-red-400"
          onClick={() => emotionsStore.clearCards()}
        >
          Видалити все
        </Button>
      </Card>
    </header>
  );
};

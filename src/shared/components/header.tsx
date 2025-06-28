"use client";
import React from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { useEmotionsStore } from "@/app/providers/store-provider";
import { Card } from "./ui/card";
import { ChartNoAxesColumn, X } from "lucide-react";
import { EmotionsStatsTrigger } from "@/features/emotions/ui/emotions-stats-trigger";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const { emotionsStore } = useEmotionsStore();
  return (
    <header className={cn("p-2 ", className)}>
      <Card className="justify-end w-full flex-row p-2 ga-2 ">
        <EmotionsStatsTrigger>
          <Button>
            <ChartNoAxesColumn />
          </Button>
        </EmotionsStatsTrigger>
        <Button
          className=" bg-red-300 hover:bg-red-400"
          onClick={() => emotionsStore.clearCards()}
        >
          <X />
        </Button>
      </Card>
    </header>
  );
};

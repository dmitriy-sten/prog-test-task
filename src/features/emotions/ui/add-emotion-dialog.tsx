"use client";
import { useEmotionsStore } from "@/app/providers/store-provider";
import { SearchSelect } from "@/shared/components/search-select";
import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import React, { useState } from "react";
import { EmotionCardDto } from "../types";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const AddEmotionDialogTrigger: React.FC<Props> = ({ className, children }) => {
  const [desc, setDesc] = React.useState("");
  const [emoVarinat, setEmoVarinat] = React.useState<EmotionCardDto>();
  const [open, setOpen] = useState(false);

  const { emotionsStore } = useEmotionsStore();

  const handleCreateCard = () => {
    if (emoVarinat?.name && emoVarinat.emoji) {
      emotionsStore.addNewCard({
        description: desc,
        color: emoVarinat.color,
        name: emoVarinat.name,
        emoji: emoVarinat.emoji,
      });
    }

    setDesc("");
    setEmoVarinat(undefined);
    setOpen(false);
  };

  return (
    <Dialog onOpenChange={(open) => setOpen(open)} open={open}>
      <DialogTrigger asChild>
        {children}
        
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">Створити нову картку</DialogTitle>

          <p className="text-8xl text-center whitespace-pre-line">
            {emoVarinat?.emoji}
          </p>
          <SearchSelect setValue={setEmoVarinat} value={emoVarinat} />
          <Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Короткий опис..."
            className="mb-1"
          />

          <Button
            className="ml-auto"
            disabled={!desc || !emoVarinat?.name}
            onClick={handleCreateCard}
          >
            Створити
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

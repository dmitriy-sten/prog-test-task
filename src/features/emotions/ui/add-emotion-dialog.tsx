"use client";
import { useEmotionsStore } from "@/app/providers/store-provider";
import { SearchSelect } from "@/shared/components/search-select";
import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Plus } from "lucide-react";
import React from "react";
import { EmotionCardDto } from "../types";

interface Props {
  className?: string;
}

export const AddEmotionDialog: React.FC<Props> = ({ className }) => {
  const [desc, setDesc] = React.useState("");
  const [emoVarinat, setEmoVarinat] = React.useState<EmotionCardDto>();

  const { emotionsStore } = useEmotionsStore();

  const handleCreateCard = () => {
    if (emoVarinat?.name && emoVarinat.emoji) {
      emotionsStore.addNewCard({
        description: desc,
        name: emoVarinat.name,
        emoji: emoVarinat.emoji,
      });
    }

    setDesc('')
    setEmoVarinat(undefined)

  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-2 rounded-full">
          <Plus size={40} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">Add new emotion</DialogTitle>

          <p className="text-8xl text-center whitespace-pre-line">{emoVarinat?.emoji}</p>
          <SearchSelect setValue={setEmoVarinat} />
          <Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter short description..."
            className="mb-1"
          />

          <Button
            className="ml-auto"
            disabled={!desc || !emoVarinat?.name}
            onClick={handleCreateCard}
          >
            Create
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

"use client";
import { useEmotionsStore } from "@/app/providers/store-provider";
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
import { randomUUID } from "crypto";
import { Plus } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

export const AddEmotionDialog: React.FC<Props> = ({ className }) => {
  const [desc, setDesc] = React.useState("");
  const [name, setName] = React.useState("");

  const { emotionsStore } = useEmotionsStore();

  const handleCreateCard = () => {
    emotionsStore.addNewCard({
      description: desc,
      name: name,
      emoji: "emogii test",
    });
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
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name..."
            className="mb-1"
          />
          <Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter short description..."
            className="mb-1"
          />

          <Button
            className="ml-auto"
            disabled={!desc || !name}
            onClick={handleCreateCard}
          >
            Create
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

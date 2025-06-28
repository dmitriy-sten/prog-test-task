"use client";
import { useEmotionsStore } from "@/app/providers/store-provider";
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
import { EmotionCardDto, EmotionVariant } from "../types";
import { EmotionsSelect } from "./emotions-select";
import { useIsMobile } from "@/shared/hooks/use-is-mobile";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/components/ui/drawer";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const AddEmotionDialogTrigger: React.FC<Props> = ({
  className,
  children,
}) => {
  const [desc, setDesc] = React.useState("");
  const [emoVarinat, setEmoVarinat] = React.useState<EmotionVariant>();
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const { emotionsStore } = useEmotionsStore();

  const handleCreateCard = () => {
    if (emoVarinat?.name && emoVarinat?.emoji) {
      emotionsStore.addNewCard({
        description: desc,
        ...emoVarinat,
      });

      setDesc("");
      setEmoVarinat(undefined);
      setOpen(false);
    }
  };

  if (isMobile) {
    return (
      <Drawer onOpenChange={(open) => setOpen(open)} open={open}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent className="p-2 gap-3 py-6">
          <DrawerHeader>
            <DrawerTitle className="text-2xl">Створити нову картку</DrawerTitle>
          </DrawerHeader>
          <p className="text-8xl text-center whitespace-pre-line">
            {emoVarinat?.emoji}
          </p>
          <EmotionsSelect setValue={setEmoVarinat} value={emoVarinat} />
          <Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Короткий опис..."
            className="mb-1"
          />

          <Button
            size={'lg'}

            type="submit"
            className="mx-auto text-lg"
            disabled={!desc || !emoVarinat?.name}
            onClick={handleCreateCard}
          >
            Створити
          </Button>
        </DrawerContent>
      </Drawer>
    );
  } else
    return (
      <Dialog onOpenChange={(open) => setOpen(open)} open={open}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-2">Створити нову картку</DialogTitle>

            <p className="text-8xl text-center whitespace-pre-line">
              {emoVarinat?.emoji}
            </p>
            <EmotionsSelect setValue={setEmoVarinat} value={emoVarinat} />
            <Input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Короткий опис..."
              className="mb-1"
            />

            <Button
              type="submit"
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

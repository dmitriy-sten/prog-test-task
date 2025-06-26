"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/components/ui/command";

import { Button } from "./ui/button";
import { EMOTIONS_VARIANTS } from "@/features/emotions/model/constants";
import { cn } from "../lib/utils";

import { ScrollArea } from "./ui/scroll-area";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { EmotionCardDto } from "@/features/emotions/types";

interface Props {
  value: EmotionCardDto;
  setValue: (value: EmotionCardDto) => void;

}

export function SearchSelect({value, setValue}:Props) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {search ? (
            <div className="flex gap-3">
              <span>
                {" "}
                {EMOTIONS_VARIANTS.find((item) => item.name === search)?.name}
              </span>
              <span>
                {EMOTIONS_VARIANTS.find((item) => item.name === search)?.emoji}
              </span>
            </div>
          ) : (
            "Виберіть емоцію..."
          )}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </DialogTrigger>

      {open && (
        <div className="w-full p-0">
          <Command>
            <CommandInput placeholder="Пошук по назві" className="h-9" />
            <CommandList>
              <ScrollArea className="h-34">
                <CommandEmpty>Не знайдено...</CommandEmpty>
                <CommandGroup>
                  {EMOTIONS_VARIANTS.map((item) => (
                    <CommandItem
                      className="flex w-full justify-between"
                      key={item.id}
                      value={item.name}
                      onSelect={(currentValue) => {
                        setSearch(currentValue === search ? "" : currentValue);
                        setValue(item)
                        setOpen(false);
                      }}
                    >
                      <span>{item.name}</span>
                      <span>{item.emoji}</span>
                      <Check
                        className={cn(
                          "ml-auto",
                          search === item.name ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </ScrollArea>
            </CommandList>
          </Command>
        </div>
      )}
    </Dialog>
  );
}

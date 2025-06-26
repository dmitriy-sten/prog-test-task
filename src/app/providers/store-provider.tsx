'use client'


import { EmotionsStore } from "@/features/emotions/model/emotions.store";
import { createContext, useContext } from "react";

const emotionsStore = new EmotionsStore()

const StoreContext = createContext({ emotionsStore });

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreContext.Provider value={{ emotionsStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useEmotionsStore = () => useContext(StoreContext);
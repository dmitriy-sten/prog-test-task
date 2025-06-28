import { makeAutoObservable } from "mobx"
import { EmotionCardDto } from "../types";
import { emotions } from "./constants";

export class EmotionsStore {

  emotionCards: EmotionCardDto[] = emotions

  constructor() {
    makeAutoObservable(this)
  }

  serArray(arr: EmotionCardDto[]) {
    this.emotionCards = arr
  }

  addNewCard(item: Omit<EmotionCardDto, 'id'>) {
    const lastElemId = this.emotionCards[this.emotionCards.length - 1]?.id ?? 0
    const newId = lastElemId + 1
    return this.emotionCards = [...this.emotionCards, { ...item, id: newId }]
  }

  deleteCard(id: number) {
    this.emotionCards = this.emotionCards.filter(item => item.id !== id)
  }

  clearCards() {
    return this.emotionCards = []
  }
}


import { makeAutoObservable } from "mobx"
import { EmotionCardDto } from "../types";
import { emotions } from "./constants";

export class EmotionsStore {

  emotionCards: EmotionCardDto[] = emotions

  constructor() {
    makeAutoObservable(this)
  }

  serArray(arr:EmotionCardDto[]){
    this.emotionCards = arr
  }

  addNewCard(item: EmotionCardDto) {
    const newId = this.emotionCards.length + 1
    return this.emotionCards.push({ ...item, id: newId})
  }

  deleteCard(id: number) {
    this.emotionCards = this.emotionCards.filter(item => item.id !== id)
  }

  clearCards() {
    return this.emotionCards = []
  }
}


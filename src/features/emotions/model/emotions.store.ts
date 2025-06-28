import { makeAutoObservable } from "mobx"
import { EmotionCardDto } from "../types";
import { makePersistable } from "mobx-persist-store";

export class EmotionsStore {

  emotionCards: EmotionCardDto[] = []

  constructor() {
    makeAutoObservable(this)


    if (typeof window !== 'undefined') {
      makePersistable(this, {
        name: 'emotion-cards',
        properties: ["emotionCards"],
        storage: window.localStorage,
      });
    }
  }

  serArray(arr: EmotionCardDto[]) {
    this.emotionCards = arr
  }

  addNewCard(item: Omit<EmotionCardDto, 'id' | 'date'>) {
    const lastElemId = this.emotionCards[this.emotionCards.length - 1]?.id ?? 0
    const newId = lastElemId + 1


    // it's first variant with mutatin array. This path provides something strange behavior: (animation of dragging not spawn in first time)
    // this.emotionCards.push({ ...item, id: newId })


    //this is second variant: make changed copy and replace
    return this.emotionCards = [...this.emotionCards, { ...item, id: newId, date: new Date() }]

  }

  deleteCard(id: number) {
    this.emotionCards = this.emotionCards.filter(item => item.id !== id)
  }

  clearCards() {
    return this.emotionCards = []
  }
}


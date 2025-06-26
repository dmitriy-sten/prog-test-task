import { makeAutoObservable } from "mobx"
import { EmotionCardDto } from "../types";
import { emotionsMap } from "./constants";


export class EmotionsStore {

    emotionCards: Map<number, EmotionCardDto> = new Map(emotionsMap)

    constructor() {
        makeAutoObservable(this)
    }

    addNewCard(item: EmotionCardDto) {
        const newId = this.emotionCards.size+1


        return this.emotionCards.set(newId, item)
    }


    deleteCard(id: number) {
        if (this.emotionCards.has(id)) {
            return this.emotionCards.delete(id)
        }
    }

    clearCards() {
        return this.emotionCards.clear()
    }



}


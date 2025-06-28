import { useEmotionsStore } from "@/app/providers/store-provider";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";


export const useDragEvents = () => {

    const { emotionsStore } = useEmotionsStore();


    const onDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldId = emotionsStore.emotionCards.findIndex(
                (item) => item.id === active.id
            );
            const newId = emotionsStore.emotionCards.findIndex(
                (item) => item.id === over.id
            );
            emotionsStore.serArray(
                arrayMove(emotionsStore.emotionCards, oldId, newId)
            );
        }
    };

    const onDragMove = (event: DragEndEvent) => {
        const { delta, active } = event;

        if (delta.x < -100) {
            emotionsStore.deleteCard(active.id as number);
        }
    };

    return {
        onDragEnd, onDragMove
    }
}
import { EmotionCardDto } from "../types";

export const emotionsMap = new Map<number, EmotionCardDto>([
    [
      1,
      {
        name: "Радість",
        description: "Стан внутрішнього підйому, задоволення та позитиву.",
        emoji: "😊",
      },
    ],
    [
      2,
      {
        name: "Сум",
        description: "Стан пригніченості, меланхолії або втрати.",
        emoji: "😢",
      },
    ],
    [
      3,
      {
        name: "Гнів",
        description: "Сильне почуття роздратування або злості.",
        emoji: "😡",
      },
    ],
    [
      4,
      {
        name: "Страх",
        description: "Емоція, викликана відчуттям загрози чи небезпеки.",
        emoji: "😨",
      },
    ],
    [
      5,
      {
        name: "Здивування",
        description: "Реакція на несподівану або незвичну подію.",
        emoji: "😲",
      },
    ],
  ]);



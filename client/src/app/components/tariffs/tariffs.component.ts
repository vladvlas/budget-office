import {Component} from "@angular/core";
import {ICard} from "../../models/card";

@Component({
  selector: "app-tariffs",
  templateUrl: "./tariffs.component.html",
  styleUrls: ["./tariffs.component.css"]
})

export class TariffsComponent {
  tariffs: ICard[] = [
    {
      title: "Базовый тариф",
      description: "Программа с ТСН МГЭ на 1 день",
      price: "1 100 ₽",
      date: "1 день",
      possibilities: [
        {
          title: "База ТСН МГЭ",
          additional: "(56 дополнение)"
        },
        {
          title: "Индексы ТСН МГЭ",
          additional: "(2019 год)"
        },
        {
          title: "Индексы  ТСН МГЭ, Глава 13",
          additional: "(2017 год)"
        }
      ],
      isBestSeller: true,
    },
    {
      title: "Бизнес тариф",
      description: "Программа с ТСН МГЭ на 30 дней",
      price: "3 300 ₽",
      date: "30 дней",
      possibilities: [
        {
          title: "База ТСН МГЭ",
          additional: "(56 дополнение)"
        },
        {
          title: "Индексы ТСН МГЭ",
          additional: "(2019 год)"
        },
        {
          title: "Индексы  ТСН МГЭ, Глава 13",
          additional: "(2017 год)"
        }
      ],
    },
    {
      title: "Энтерпрайз тариф",
      description: "Программа с ТСН МГЭ на 90 день",
      price: "9 900 ₽",
      date: "90 дней",
      possibilities: [
        {
          title: "База ТСН МГЭ",
          additional: "(56 дополнение)"
        },
        {
          title: "Индексы ТСН МГЭ",
          additional: "(2019 год)"
        },
        {
          title: "Индексы  ТСН МГЭ, Глава 13",
          additional: "(2017 год)"
        }
      ],
    }
  ]
}

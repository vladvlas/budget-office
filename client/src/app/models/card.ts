export interface ICard {
  title: string;
  price: string;
  date: string;
  description: string;
  possibilities: IPossibility[]
  isBestSeller?: boolean
}

export interface IPossibility {
  title: string;
  additional: string;
}

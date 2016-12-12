
import { Zutat } from "./zutaten.model";

export class Rezept {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public zutaten: Zutat[]
  ) {
  }
}

import { FormeGeometrique } from "./forme-géométrique";
import { Point } from "./point";

/**
 * La classe Rectangle représente une forme géométrique circulaire
 */
export class Cercle extends FormeGeometrique {
  /**
   * permet de stocker le rayon du cercle
   */
  rayon: number;

  /**
   * Permet de construire un Cercle.
   * On stocke le point d'origine comme le centre du cercle, et son rayon
   */
  constructor(origin: Point, rayon: number) {
    super(origin);
    this.rayon = rayon;
  }

  /**
   * permet de calculer le périmètre de chaque figure
   */
  getPerimetre() {
    // TODO COMPLETE
    return NaN;
  }

  /**
   * permet de récupérer le rayon du Cercle
   */
  getRayon() {
    return this.rayon;
  }

  /**
   * renvoie une représentation textuelle d'un Cercle
   * en affichant la représentation du centre et son rayon
   */
  toString(): string {
    return `Cercle de centre ${this.getOrigin().toString()} et de rayon ${this.getRayon()}`;
  }
}

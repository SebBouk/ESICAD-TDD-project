import { hasPerimeter } from "./has-perimeter";
import { Point } from "./point";

/**
 * La classe FormeGeometrique définit des comportements communs à toutes les formes
 * Cette classe est abstraite, c'est-à-dire qu'elle ne peut être instanciée telle quelle
 */
export abstract class FormeGeometrique implements hasPerimeter {
    /**
     * le membre origin définit un point d'origine
     * dans le repère orthonormé à partir duquel
     *  on peut dessiner la forme
     */
    private origin: Point;

    /**
     * Constructeur par défaut
     * stocke le point d'origine
     */
    constructor(origin: Point) {
        this.origin = origin;
    }

    /**
     * renvoit le point d'origine de la forme
     * @returns {Point} l'objet Point correspondant
     */
    getOrigin(): Point {
        return this.origin;
    }

    /**
     * on définit une signature de méthode `toString()` _sans l'implémenter_
     * afin que les classes qui vont hériter de FormeGeométrique
     * doivent obligatoirement écrire cette méthode
     * (afin d'afficher une représentation de la forme en tant que texte)
     */
    abstract toString(): string;

    abstract getPerimetre(): number;
}

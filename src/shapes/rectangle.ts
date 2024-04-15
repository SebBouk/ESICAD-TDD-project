import { FormeGeometrique } from "./forme-géométrique";
import { Point } from "./point";

/**
 * La classe Rectangle représente une forme géométrique rectangulaire
 */
export class Rectangle extends FormeGeometrique {
    /**
     * représente la longueur d'un côté du rectangle
     */
    private longueur: number;

    /**
     * représente la largeur d'un côté du rectangle
     */
    private largeur: number;

    /**
     * Constructeur d'un Rectangle
     * enregistrement du point d'origine et de sa longueur / largeur
     * le constructeur fournit des paramètres par défaut
     * qui sont appliqués si on ne les fournit pas au constructeur
     */
    constructor(
        origin: Point = new Point(),
        longueur: number = 2,
        largeur: number = 3,
    ) {
        // on appelle le constructeur de la classe parente à l'aide du mot-clé `super`
        super(origin);
        this.longueur = longueur;
        this.largeur = largeur;
    }

    /**
     * permet de calculer le périmètre du rectangle `(2 * longueur  + 2 * largeur)`
     */
    public getPerimetre(): number {
        return 2 * this.longueur + 2 * this.largeur;
    }

    /**
     * permet de modifier la valeur de l'attribut `longueur` de l'objet
     * contrôle si la valeur fournie en paramètre est supérieure à 0
     */
    public setLongueur(long: number) {
        if (long > 0) {
            this.longueur = long;
        }
    }

    /**
     * permet de modifier la valeur de l'attribut `largeur` de l'objet
     * contrôle si la valeur fournie en paramètre est supérieure à 0
     */
    public setLargeur(larg: number) {
        if (larg > 0) {
            this.largeur = larg;
        }
    }

    /**
     * @returns la longueur du Rectangle
     */
    public getLongueur() {
        return this.longueur;
    }

    /**
     * @returns la longueur du Rectangle
     */
    public getLargeur() {
        return this.largeur;
    }

    /**
     * renvoie une représentation textuelle d'un Rectangle
     * en affichant son point d'origine, sa longueur et sa largeur
     */
    public toString(): string {
        return `Rectangle d'origine ${this.getOrigin().toString()}, de longueur ${this.getLongueur()} et de largeur ${this.getLargeur()}`;
    }
}

import { FormeGeometrique } from "./forme-géométrique";
import { Point } from "./point";

/**
 * La classe Rectangle représente une forme géométrique triangulaire
 */
export class Triangle extends FormeGeometrique {
    /**
     * représente le second sommet du triangle
     */
    private point2: Point;
    /**
     * représente le troisième sommet du triangle
     */
    private point3: Point;

    /**
     * Constructeur d'un Triangle. On considère le premier sommet
     *  comme le  {@link FormeGeometrique.origin | point d'origine} de la forme géométrique,
     * on stocke les 2 autres sommets en enregistrant les points
     */
    constructor(p1: Point, p2: Point, p3: Point) {
        // on appelle le constructeur parent à l'aide de super()
        super(p1);
        this.point2 = p2;
        this.point3 = p3;
    }

    /**
     * récupère le premier sommet du triangle.
     * Réutilise la méthode du {@link FormeGeometrique.getOrigin| point d'origine} de la classe `FormeGeometrique`
     */
    public getPoint1() {
        return this.getOrigin();
    }

    /**
     * récupère le second sommet du triangle
     */
    public getPoint2() {
        return this.point2;
    }

    /**
     * récupère le troisième sommet du triangle
     */
    public getPoint3() {
        return this.point3;
    }

    /**
     * renvoie une représentation textuelle d'un Triangle
     * en affichant la représentation de chaque sommet
     */
    toString(): string {
        return `Triangle d'origine : ${this.getOrigin().toString()}, point 2 : ${this.getPoint2().toString()}, point 3 :  ${this.getPoint3().toString()}`;
    }

    getPerimetre(): number {
        return (
            this.getPoint1().distanceFrom(this.getPoint2()) +
            this.getPoint2().distanceFrom(this.getPoint3()) +
            this.getPoint3().distanceFrom(this.getPoint1())
        );
    }
}

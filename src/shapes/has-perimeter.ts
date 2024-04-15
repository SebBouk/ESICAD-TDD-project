/**
 * décrit le fait qu'un objet a un périmètre, et qu'on peut le récupérer via sa méthode `getPerimetre`
 */
export interface hasPerimeter {
  /**
   * Retourne le périmètre de la classe implémentant cette interface
   */
  getPerimetre(): number;
}

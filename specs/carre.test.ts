import {describe, expect, test, beforeEach} from "@jest/globals"
import { Carre } from "~/shapes/carre"
import { Point } from "~/shapes/point"

describe("classe Carre", () => {

    let carre: Carre;
    beforeEach(() => {
        carre = new Carre (new Point(0,0),4)
    })
    test('getPerimetre de carre === 4', () => {
        expect(carre.getPerimetre()).toBe(4*4)
    })
    test("Can change Largueur", () => {
        carre.setLargeur(5)
        expect(carre.getLargeur()).toBe(5)
    })
})
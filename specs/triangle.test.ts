import {describe, expect, test, beforeEach} from "@jest/globals"
import { Triangle } from "~/shapes/triangle" 
import { Point } from "~/shapes/point"

describe(" class: Triangle", () =>{
    let triangle: Triangle;
    beforeEach(() => {
        triangle = new Triangle (new Point (0,0), new Point(0,2), new Point (2.0))
    })
    test('getPerimetre de triangle === racine de 2 ', () => {
        expect(triangle.getPerimetre()).toBe(4+Math.sqrt(8))
    })
    
})
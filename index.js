// Your code here

class Polygon {
    constructor(rayString) {
        this.ray = rayString
        this.count = this.ray.length
    }

    get countSides() {
        return this.ray.length
    }

    get perimeter() {
        let total = 0
        for (let element of this.ray) {
            total+= element
        }
        return total
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (!Array.isArray(this.ray)) return;
        if (this.count !== 3) return;
        let side1 = this.ray[0]
        let side2 = this.ray[1]
        let side3 = this.ray[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {

    get isValid() {
        if (!Array.isArray(this.ray)) return;
        if (this.count !== 4) return;
        let side1 = this.ray[0]
        let side2 = this.ray[1]
        let side3 = this.ray[2]
        let side4 = this.ray[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

    get area() {
        if (!Array.isArray(this.ray)) return;
        if (this.count !== 4) return;
        return this.ray[0] * this.ray[0]
    }
}

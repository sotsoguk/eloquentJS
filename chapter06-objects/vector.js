class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(v2) {
        return new Vec(this.x + v2.x, this.y + v2.y);
    }

    minus(v2) {
        return new Vec(this.x - v2.x, this.y - v2.y);
    }
    get length() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
    // toString() {
    //     return `(${this.x},${this.y})`
    // }
}

Vec.prototype.toString = function(){
    return `(${this.x},${this.y})`
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

console.log(String(new Vec(1,2)))
const min1 = function (a, b) {
    if (a < b) return a;
    else return b;
};

function min2(a, b) {
    return (a < b) ? a : b
}

let min3 = (a, b) => (a < b) ? a : b;

console.log(min1(4, -9))
console.log(min2(4, -9))
console.log(min3(10, 100))
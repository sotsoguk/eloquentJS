function range(a, b, step = (a<b) ? 1: -1) {
    let rg = []
    if ( step > 0) for (let i = a; i <= b; i += step) rg.push(i)
    else if (step <0) for (let i = a; i >= b; i += step) rg.push(i)
    return rg
}

function sum(arr) {
    let total = 0;
    for (let elem of arr) { // or for (let elem of arr)
        total += elem;
    }
    return total;
}

function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length-1;i>=0;i--) {
        newArr.push(arr[i])
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    let size = arr.length
    let halfSize = arr.length / 2;
    for (let i = 0;i<halfSize;i++){
        let tmp = arr[size-1-i];
        arr[size-1-i] = arr[i]
        arr[i] = tmp
    }
    return arr;
}
console.log(range(10, 5,7))
console.log(range(10, 5,-1))
console.log(range(1, 5,2))
console.log(range(10,1))
console.log(sum(range(1,10)))
console.log(reverseArray(range(1,10)))
console.log(reverseArrayInPlace(range(1,11)))
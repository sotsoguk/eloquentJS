function every(arr, test) {
    for (let elem of arr){
        if (!test(elem)){
            return false;
        }
    }
    return true;
}
function every2(arr,test) {
    return !arr.some(x => !test(x))
}
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true
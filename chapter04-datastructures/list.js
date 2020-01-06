function arrayToList(arr){
    if (arr.length == 0) return null;
    return {value: arr[0],rest: arrayToList(arr.slice(1,))}
}
function arrayToList2(arr){
    let list = null
    for (let i=arr.length-1;i>=0;i--) {
        list = {value:arr[i],rest:list}
    }
    return list
}
function listToArray(list){
    let arr =[]
    for (let node = list;node;node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}
function prepend(value, list){
    return {value, rest:list}
}
function nth(number,list){
    if (number == 0) return list.value;
    if (!list) return undefined;
    return nth(number-1, list.rest)
}
console.log(arrayToList([10,20,30]))
console.log(arrayToList2([10,20,30]))
console.log(listToArray(arrayToList([10,20,30])))
let list1 = arrayToList([10,20,30])
console.log(list1)
let list2 = prepend(5,list1)
console.log(list2)
console.log(listToArray(list2))
console.log(nth(10,list2))

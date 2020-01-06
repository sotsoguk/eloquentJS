function flattArr(arr) {
    return arr.reduce( (flat, curr) =>  flat.concat(curr),[]);
    
}
console.log(flattArr([[10],[20,30,[40,50]]]))
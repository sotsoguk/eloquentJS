function isEven(a) {
    if (a < 0) return isEven(-a);
    else if (a == 0) return true;
    else if (a == 1) return false;
    else return isEven(a - 2);
}
console.log(isEven(10), isEven(9), isEven(0), isEven(-2),isEven(50))
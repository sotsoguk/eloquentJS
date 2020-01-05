let lim = 100;

for (let i=1;i<=lim;i++) {
    line = "";
    if (i%3 == 0) {
        line += "Fizz"
    }
    if (i%5 == 0) {
        line += "Buzz"
    }
    // if (line.length == 0) {
    //     line += i
    // }

    // the way
    
    console.log(line || i)
}
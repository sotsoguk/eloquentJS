function loop(start, test, update, body) {
    // for (;test(start);){
    //     body(start)
    //     start = update(start)
    // }
    for (let value = start; test(value);value = update(value)){
        body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
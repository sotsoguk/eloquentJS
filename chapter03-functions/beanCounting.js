function countChar(s,c = "B") {
    let cnt = 0;
    for (let i=0;i<s.length;i++){
        if (s[i] === c) cnt++;
    }
    return cnt;
}

console.log(countChar("ABBBA","A"))
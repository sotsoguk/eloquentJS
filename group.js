class Group {
    constructor() {
        this.members = []
    }

    has(elem) {
        return this.members.includes(elem)
    }
    add(elem){
        if (!this.has(elem)) this.members.push(elem)
    }
    delete(elem) {
        this.members = this.members.filter(v => v!==elem)
    }
    static from(coll) {
        let group = new Group;
        for (let val of coll){
            group.add(val);
        }
        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
console.log(group.has(10));
group.delete(10);
console.log(group.has(10));
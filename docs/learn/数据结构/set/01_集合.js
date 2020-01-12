function Set() {

    this.items = {};


    Set.prototype.add = function (data) {
        if (this.has(data)) {
            return false;
        }
        this.items[data] = data;
        return true;
    }


    Set.prototype.remove = function (data) {
        if (!this.has(data)) {
            return false;
        }
        delete this.items[data];
        return true;
    }

    Set.prototype.has = function (data) {
        return this.items.hasOwnProperty(data);
    }

    Set.prototype.clear = function () {
        this.items = {};
        return true;
    }

    Set.prototype.size = function () {
        return this.values().length;
    }

    Set.prototype.values = function () {
        return Object.keys(this.items);
    }

    // 集合的交集, 两者共有的部分
    Set.prototype.intersectionSet = function (otherSet) {
        let intersectionSet = new Set();
        // A在B集合中就是共有的
        let original = this.values();

        for (let i = 0; i < original.length; i++) {
            if (otherSet.has(original[i])) {
                intersectionSet.add(original[i]);
            }
        }
        return intersectionSet;
    }

    // 集合的并集, 两者合并之后的部分

    Set.prototype.union = function (otherSet) {
        let unionSet = new Set(...otherSet.values(), ...this.values());
        return unionSet;
    }

    // 集合的差集
    Set.prototype.difference = function (otherSet) {
        // A - B, 不包含公共部分 取A
        let differenceSet = new Set();
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i])
            }
        }
        return differenceSet;

    }

    // 集合的子集
    Set.prototype.subset = function (otherSet) {
        let values = otherSet.values();
        for (let i = 0; i < values.length; i++) {
            if (!this.has(values[i])) {
                return false;
            }
        }
        return true;
    }


    if (arguments.length > 0) {
        for (let i = 0; i < arguments.length; i++) {
            this.add(arguments[i])
        }
    }
}

let setA = new Set(1, 2, 3, 4, 5, 6);

let setB = new Set(2, 3, 4, 5, 'wsj');

console.log(setA.intersectionSet(setB).values());
console.log(setA.union(setB).values());
console.log(setA.difference(setB).values());
console.log(setB.difference(setA).values());
console.log(setA.subset(setB))
// console.log(set.add('wjs'))
// console.log(set.add('1'))
// console.log(set.add('wjs'))
// console.log(set.add(2))
// console.log(set.values())
// console.log(set.remove('a'));
// console.log(set.remove('wjs'));
// console.log(set.values())
// console.log(set.size());
// console.log(set.has('1'))
// console.log(set.has(3))
// console.log(set.clear());
// console.log(set.values());
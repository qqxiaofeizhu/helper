/*
 * @Author: wjs 
 * @Date: 2019-11-19 23:50:01 
 * @Last Modified by: wjs
 * @Last Modified time: 2019-11-20 00:07:35
 */

// 栈的实现方式 1.数组 2.链表

class Stack {
    constructor() {
        this.stack = [];
    }

    // 入栈, 进入栈顶
    push(element) {
        this.stack.unshift(element)
    }

    // 出栈
    pop() {
        this.stack.shift();
    }

    size() {
        return this.stack.length;
    }

    peek() {
        return this.stack[0]
    }

    isEmpty() {
        return this.stack.length === 0
    }

    toString() {
        let resultString = '';
        for (let i = 0; i < this.stack.length; i++) {
            resultString += this.stack[i] + ' ';
        }
        return resultString;
    }
}

let s = new Stack();

s.push(6);
s.push(3);
s.push(1);

s.pop();

console.log(s.peek())

console.log(s);
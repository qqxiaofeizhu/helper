function Queue() {
    this.queue = [];

    // 1.将元素放到对列中
    Queue.prototype.enqueue = function (element) {
        this.queue.push(element)
    }

    // 从队列中删除元素
    Queue.prototype.dequeue = function () {
        return this.queue.shift();
    }

    // 查看队头的元素
    Queue.prototype.front = function () {
        return this.queue[0]
    }

    // 查看对列是否为空
    Queue.prototype.isEmpty = function () {
        return this.queue.length == 0;
    }

    // 获取栈中元素的个数
    Queue.prototype.size = function () {
        return this.queue.length;
    }

    // toString
    Queue.prototype.toString = function () {
        let resultString = '';
        for (let i = 0; i < this.queue.length; i++) {
            resultString += this.queue[i] + ' ';
        }
        return resultString;
    }
}

let queue = new Queue();

queue.enqueue('sjw');
queue.enqueue('wjs');
queue.enqueue('js');

console.log(queue);

queue.dequeue();

console.log(queue.front());
console.log(queue.size());
console.log(queue.isEmpty());

console.log(queue);
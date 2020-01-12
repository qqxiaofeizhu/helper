function PriorityQueue() {

    // 内部类
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.queue = [];

    // 插入
    PriorityQueue.prototype.enqueue = function (element, priority) {
        // 1. 创建对象
        let queElement = new QueueElement(element, priority);
        // 判断队列是否为空
        if (this.isEmpty()) {
            this.queue.push(queElement);
        } else {
            let added = false;
            // 对列中有比它大的优先级
            for (let i = 0; i < this.queue.length; i++) {
                if (queElement.priority < this.queue[i].priority) {
                    this.queue.splice(i, 0, queElement);
                    added = true;
                    break;
                }
            }
            // 对列中没有比它大的优先级
            if (!added) {
                this.queue.push(queElement);
            }
        }
    }

    // 从队列中删除元素
    PriorityQueue.prototype.dequeue = function () {
        return this.queue.shift();
    }

    // 查看队头的元素
    PriorityQueue.prototype.front = function () {
        return this.queue[0]
    }

    // 查看对列是否为空
    PriorityQueue.prototype.isEmpty = function () {
        return this.queue.length == 0;
    }

    // 获取栈中元素的个数
    PriorityQueue.prototype.size = function () {
        return this.queue.length;
    }

    // toString
    PriorityQueue.prototype.toString = function () {
        let resultString = '';
        for (let i = 0; i < this.queue.length; i++) {
            resultString += this.queue[i] + ' ';
        }
        return resultString;
    }
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue(123, 1);
priorityQueue.enqueue(456, 2);
priorityQueue.enqueue(789, 1.5);

console.log(priorityQueue);
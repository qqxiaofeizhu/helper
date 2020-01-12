// 规则：班级玩一个游戏，所有的学生围成一圈，从某个同学开始向身边同学传递，喊停
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

function passGame(nameList, num) {
    let queue = new Queue();

    // 1. 将所有人加入对列
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }


    // 2. 开始报数， 不是num放入对尾，是的话从队列中删除

    while (queue.size() > 1) {
        for (let i = 0; i < num - 1; i++) {
            queue.enqueue(queue.dequeue());
        }
        queue.dequeue();
    }


    // 获取对列的人数

    let endName = queue.front();

    console.log(`获胜的是${endName},下标是${nameList.indexOf(endName)}`);
}


passGame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], 2);
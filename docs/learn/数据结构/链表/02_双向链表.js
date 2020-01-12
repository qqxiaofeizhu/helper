function DupLinkedList() {
    // 双向链表

    function Node(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }

    this.head = null;
    this.tail = null;
    this.length = 0;

    DupLinkedList.prototype.append = function (data) {
        let nodeData = new Node(data);

        // 是否是第一个节点
        if (this.length == 0) {
            this.head = nodeData;
            this.tail = nodeData;
        } else {
            nodeData.previous = this.tail;
            this.tail.next = nodeData;
            this.tail = nodeData;
        }

        this.length += 1;
    }

    // 插入方法
    DupLinkedList.prototype.insert = function (position, data) {
        // 1.1 越界判断
        if (position < 0 || position > this.length) {
            return false;
        }
        let newNode = new Node(data); // 新的节点

        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (position == 0) {
                this.head.previous = newNode;
                newNode.next = this.head;
                this.head = newNode;
            } else if (position == this.length) {
                newNode.previous = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
            } else {
                let current = this.head;
                let index = 0;
                while (index++ < position) {
                    current = current.next;
                }
                // 找到正确的节点
                newNode.next = current;
                newNode.previous = current.previous;
                current.previous.next = newNode;
                current.previous = newNode;
            }
        }
        this.length += 1;
        return true;
    }



    // 转换成字符串
    DupLinkedList.prototype.toString = function () {
        return this.backWardString();
    }

    DupLinkedList.prototype.forwardString = function () {
        let resultStr = '';
        let current = this.tail;
        while (current) {
            resultStr += current.data + " ";
            current = current.previous;
        }
        return resultStr;
    }

    DupLinkedList.prototype.backWardString = function () {
        let resultStr = '';
        let current = this.head;
        while (current) {
            resultStr += current.data + " ";
            current = current.next;
        }
        return resultStr;
    }
}


const dupLinkedList = new DupLinkedList();

dupLinkedList.insert(0, '1')

dupLinkedList.append('wjs');
dupLinkedList.append('love');
dupLinkedList.append('lly');
dupLinkedList.insert(4, '4')

dupLinkedList.insert(2, '4q')

// console.log(dupLinkedList.backWardString(), 'backWardString');
// console.log(dupLinkedList.forwardString(), 'forwardString');
console.log(dupLinkedList.toString(), 'toString');




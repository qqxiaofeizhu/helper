// Node: left, right, key
// - insert(key) 向树中插入一个新的键
// - search(key) 在树中查找一个键，如果节点存在，返回true, 不存在，返回null
// - inOrderTraverse 通过中序遍历所有的节点
// - preOrderTraverse 通过前序遍历所有的节点
// - postOrderTraverse 通过后序遍历所有的节点
// - min 返回树的最小的值/键
// - max 返回树的最大的值/键
// - remove(key) 从树中移除某个键

function Bst() {
    // 属性
    this.root = null;

    function Node(key) {
        this.left = null;
        this.key = key;
        this.right = null;
    }

    Bst.prototype.insertNode = function (node, newNode) {
        // node 要比较的node

        // 新节点的key值比比较节点的key小，向左查找
        if (newNode.key < node.key) {
            // 1. 左子节点是否有值
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    // 方法
    Bst.prototype.insert = function (key) {
        // 1. 根据key创建节点
        let newNode = new Node(key);
        // 2. 判断根节点是否存在
        if (!this.root) {
            this.root = newNode;
            return;
        }
        // 3. 和根节点进行比较
        this.insertNode(this.root, newNode)
    }

    Bst.prototype.search = function (key) {
        
    }

    Bst.prototype.inOrderTraverse = function () {

    }

    Bst.prototype.preOrderTraverse = function () {

    }

    Bst.prototype.postOrderTraverse = function () {

    }

    Bst.prototype.min = function () {

    }

    Bst.prototype.max = function () {

    }

    Bst.prototype.remove = function (key) {

    }
}

let bst = new Bst();
bst.insert(9);
bst.insert(6);
bst.insert(12);
console.log(bst);
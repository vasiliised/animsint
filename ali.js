class TreeNode {
    constructor(data, index) {
        this.data = data;
        this.index = index;
        this.children = [];
    }
}

// Example usage
let nodes = [];
let node = { children: [] };
let children = [1, 2, 3];

for (let i = 0; i < children.length; i++) {
    let childNode = new TreeNode(children[i], i);
    node.children[i] = childNode;
    nodes.push(childNode);
}

console.log(nodes);  // Array of TreeNode instances
console.log(node.children);  // Array of TreeNode instances within `node`

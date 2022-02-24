var _a;
class MyNode {
    constructor(name) {
        this.children = [];
        this.name = name;
    }
    addChild(node) {
        this.children.push(node);
    }
    find(childName) {
        return this.children.find((child) => child.name === childName);
    }
    print() {
        console.log(this.children.map((c) => c.name));
    }
}
class Tree {
    constructor() {
        this.parent = new MyNode(".");
    }
    addChild(parent, node) {
        parent.addChild(node);
    }
    addPath(path) {
        const parsedPath = path.split("/");
        let cur = this.parent;
        parsedPath.forEach((directory) => {
            if (directory === "" || directory === ".")
                return;
            const existingNode = cur.find(directory);
            if (existingNode) {
                cur.print();
                cur = existingNode;
                return;
            }
            const newChild = new MyNode(directory);
            cur.addChild(newChild);
            cur.print();
            cur = newChild;
        });
    }
    navigate(path) {
        const parsedPath = path.split("/");
        let cur = this.parent;
        for (const directory of parsedPath) {
            if (directory === "" || directory === ".")
                continue;
            const existingNode = cur.find(directory);
            if (!existingNode) {
                return null;
            }
            cur = existingNode;
        }
        return cur;
    }
}
const addDirectory = (tree, path) => {
    console.log(`add ${path}`);
    tree.addPath(path);
    console.log();
};
const fileTree = new Tree();
addDirectory(fileTree, "/users/ayaanqui");
addDirectory(fileTree, "/users/robo1");
addDirectory(fileTree, "/users/ayaanqui/bluff");
addDirectory(fileTree, "/users/ayaanqui/repos/cool/folder2");
addDirectory(fileTree, "/lib");
fileTree.navigate("/users/ayaanqui").print();
(_a = fileTree.navigate("/users/user2")) === null || _a === void 0 ? void 0 : _a.print();
console.log("done.");
//# sourceMappingURL=index.js.map
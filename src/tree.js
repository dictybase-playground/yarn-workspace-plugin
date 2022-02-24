var MyNode = /** @class */ (function () {
    function MyNode(name) {
        this.children = [];
        this.name = name;
    }
    MyNode.prototype.addChild = function (node) {
        this.children.push(node);
    };
    MyNode.prototype.find = function (childName) {
        return this.children.find(function (child) { return child.name === childName; });
    };
    MyNode.prototype.print = function () {
        var printValue = this.children
            .map(function (c) { return c.name; })
            .reduce(function (prev, cur, i) {
            if (i === 0)
                return "[".concat(cur);
            if (i === printValue.length - 1)
                return "".concat(prev, ", ").concat(cur, "]");
            return "".concat(prev, ", ").concat(cur);
        });
        console.log(printValue);
    };
    return MyNode;
}());
var Tree = /** @class */ (function () {
    function Tree() {
        this.parent = null;
    }
    Tree.prototype.addChild = function (parent, node) {
        parent.addChild(node);
    };
    Tree.prototype.addPath = function (path) {
        if (!this.parent)
            this.parent = new MyNode("."); // root
        // "/repos/dictybase/project/myProject2".split("/")
        // returns [ '', 'repos', 'dictybase', 'project', 'myProject2' ]
        var parsedPath = path.split("/");
        var cur = this.parent;
        parsedPath.forEach(function (directory, i) {
            // skip root and start adding each directory
            if (directory === "" || directory === ".")
                return;
            var newChild = new MyNode(directory);
            cur.addChild(newChild);
            cur.print;
            cur = newChild;
        });
    };
    return Tree;
}());

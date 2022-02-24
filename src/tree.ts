class MyNode {
  children: Array<MyNode>
  name: string

  constructor(name: string) {
    this.children = []
    this.name = name
  }

  addChild(node: MyNode) {
    this.children.push(node)
  }

  find(childName: string): MyNode {
    return this.children.find((child) => child.name === childName)
  }

  print() {
    console.log(this.children.map((c) => c.name))
  }
}

class Tree {
  parent: MyNode

  constructor() {
    this.parent = new MyNode(".")
  }

  addChild(parent: MyNode, node: MyNode) {
    parent.addChild(node)
  }

  addPath(path: string) {
    const parsedPath = path.split("/")
    let cur = this.parent
    parsedPath.forEach((directory) => {
      // skip root and start adding each directory
      if (directory === "" || directory === ".") return

      // check if directory already exists
      // if it does move cur
      // otherwise add new directory and set as cur
      const existingNode = cur.find(directory)
      if (existingNode) {
        cur.print()
        cur = existingNode
        return
      }
      const newChild = new MyNode(directory)
      cur.addChild(newChild)
      cur.print()
      cur = newChild
    })
  }

  navigate(path: string): MyNode {
    const parsedPath = path.split("/")
    let cur = this.parent
    for (const directory of parsedPath) {
      if (directory === "" || directory === ".") continue
      const existingNode = cur.find(directory)
      if (!existingNode) {
        return null
      }
      cur = existingNode
    }
    return cur
  }
}

/// Testing

const addDirectory = (tree: Tree, path: string) => {
  console.log(`add ${path}`)
  tree.addPath(path)
  console.log()
}

const fileTree = new Tree()
addDirectory(fileTree, "/users/ayaanqui")
addDirectory(fileTree, "/users/robo1")
addDirectory(fileTree, "/users/ayaanqui/bluff")
addDirectory(fileTree, "/users/ayaanqui/repos/cool/folder2")
addDirectory(fileTree, "/lib")

fileTree.navigate("/users/ayaanqui").print()
fileTree.navigate("/users/user2")?.print()

console.log("done.")

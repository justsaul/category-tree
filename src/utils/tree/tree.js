import { range } from '../fn'

export const TYPE = {
  RECURSIVE: 'recursive',
  ITERATIVE: 'iterative',
}

export class Tree {
  constructor(value) {
    this.value = value
    this.children = []
  }

  addChildren(value) {
    value instanceof Tree
      ? this.children.push(value)
      : this.children.push(new Tree(value))

    return this
  }

  getValue() {
    return this.value
  }

  getChildren() {
    return this.children
  }

  insert(insertable, atNode, tree=this) {
    if (tree.value === atNode.value) {
      tree.addChildren(insertable)
      return true
    }

    if (~tree.children.length) {
      range(tree.children.length).forEach((i) => {
        this.insert(insertable, atNode, tree.children[i])
      })
    }
    return false
  }
}

import React from 'react'
import PropTypes from 'prop-types'

import { Tree } from '../../../utils/tree'
import { range } from '../../../utils/fn'

export class TreeIterative extends React.Component {
    state = {
        tree: this.props.tree
    }

    traverseTree = (tree) => {
        const stack = [{
            depth: 0,
            element: tree
        }]
        let current
        let children
        let depth
        const returnable = []
        // eslint-disable-next-line
        while (current = stack.pop()) {
            depth = current.depth
            current = current.element
            children = current.children
            // eslint-disable-next-line 
            range(children.length).forEach((pos) => {
                stack.push({
                    element: children[pos],
                    depth: depth + 1
                })
            })
            returnable.push({
                current,
                depth
            })
        }

        return returnable
    }

    render() {
        const { tree } = this.state
        const { update } = this.props

        return (
            <div>
                {this.traverseTree(tree).map((iter, i) => {
                    return (
                        <div
                            key={i}
                            style={{
                                paddingLeft: `${(iter.depth + 1) * 20}px`,
                            }}
                        >
                            {iter.current.value}
                            <button
                                onClick={() => { update('element', iter.current)}}
                                title="addOperation"
                            >
                                {'Add operation'}
                            </button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

TreeIterative.propTypes = {
    tree: PropTypes.instanceOf(Tree).isRequired,
    update: PropTypes.func.isRequired,
}

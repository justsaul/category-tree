import React from 'react'
import PropTypes from 'prop-types'

import { Tree } from '../../../utils/tree'

export class TreeRecursive extends React.Component {
    state = {
        tree: this.props.tree
    }

    render() {
        const { tree, update } = this.props

        if (tree) {
            return (
                <div style={{paddingLeft: '20px'}}>
                    {tree.value}
                    <button
                        onClick={() => update('element', this.state.tree)}
                        title="addOperation"
                    >
                        {'Add operation'}
                    </button>
                    {
                        tree.children.map((desc, i) => {
                            return (
                                <TreeRecursive
                                    tree={desc}
                                    key={tree.value + i}
                                    update={update}
                                />
                            )
                        })
                    }
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

TreeRecursive.propTypes = {
    tree: PropTypes.instanceOf(Tree).isRequired,
    update: PropTypes.func.isRequired,
}
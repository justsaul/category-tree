import React from 'react'
import PropTypes from 'prop-types'

import { Tree } from '../../../utils/tree'
import { TreeFactory } from '../factory'

export default class TreeProvider extends React.Component {
    state = {
        tree: undefined,
    }

    componentDidMount() {
        this.setState({tree: this.defineTree()})
    }

    defineTree = () => {
        const Lorem = new Tree('Lorem')
        const Ipsum = new Tree('Ipsum')
        const Dolor = new Tree('Dolor')
        const Orchi = new Tree('Orchi')


        Lorem
            .addChildren(Ipsum)
            .addChildren(Dolor
                .addChildren(Orchi
                    .addChildren('IO')
                )
            )
        Lorem.addChildren('Aliquip')
        Orchi.addChildren('Commodo')

        return Lorem
    }

    updateHandler = (value, tree) => {
        // Alternative way this.state.tree.insert(value, tree)
        tree.addChildren(value)
        // To force state update after insertion
        this.setState({tree: this.state.tree})
    }

    render() {
        const { tree } = this.state
        const { type } = this.props

        return (
            <div style={{display: 'inline-block'}}>
                <p>{this.props.type}</p>
                {/* TODO implement When component for conditional renders*/}
                {
                    this.state.tree
                        ?
                            <TreeFactory
                                type={type}
                                tree={tree}
                                update={this.updateHandler}
                            />
                        : <div/>
                }
            </div>
        )
    }
}

TreeProvider.propTypes = {
    type: PropTypes.string.isRequired,
}

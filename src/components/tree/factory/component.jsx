import React from 'react'
import PropTypes from 'prop-types'

import { TreeRecursive } from '../recursive'
import { TreeIterative } from '../iterative'
import { TYPE as TREE_TYPE } from '../../../utils/tree'

export const TreeFactory = ({ type, ...props }) => {
    return (
        <>
            {type === TREE_TYPE.ITERATIVE
                ? <TreeIterative {...props} />
                : <TreeRecursive {...props} />
            }
        </>
    )
}

TreeFactory.propTypes = {
    type: PropTypes.string.isRequired,
}

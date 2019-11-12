import React from 'react'
import Provider from '../../components/tree/provider'

import { TYPE as TREE_TYPE } from '../../utils/tree'

const TreePage = (props) => (
    <>
        <Provider {...props} type={TREE_TYPE.RECURSIVE}/>
        <Provider {...props} type={TREE_TYPE.ITERATIVE}/>
    </>
)

export default TreePage

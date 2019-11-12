import React from 'react'
import { shallow } from 'enzyme'

import { TYPE as TREE_TYPE } from '../../../../utils/tree'
import { Tree } from '../../../../utils/tree'
import { TreeIterative } from '../../iterative'
import { TreeRecursive } from '../../recursive'
import { TreeFactory } from '../'

describe('<TreeFactory/>', () => {
    it('should render without exploding', () => {
        const Lambda = new Tree('Lambda')
        const wrapper = shallow(
            <TreeFactory type={TREE_TYPE.ITERATIVE} tree={Lambda} update={jest.fn()}/>
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('should provide only <TreeIterative/> tree based on type', () => {
        const Lambda = new Tree('Lambda')
        Lambda.addChildren(new Tree('Children'))
        
        const wrapper = shallow(
            <TreeFactory type={TREE_TYPE.ITERATIVE} tree={Lambda} update={jest.fn()}/>
        )

        expect(wrapper.find(TreeIterative).length).toBe(1)
        expect(wrapper.find(TreeRecursive).length).toBe(0)
    })

    it('should provide only <TreeRecursive/> tree based on type', () => {
        const Lambda = new Tree('Lambda')
        Lambda.addChildren(new Tree('Children'))
        
        const wrapper = shallow(
            <TreeFactory type={TREE_TYPE.RECURSIVE} tree={Lambda} update={jest.fn()}/>
        )

        expect(wrapper.find(TreeRecursive).length).toBe(1)
        expect(wrapper.find(TreeIterative).length).toBe(0)
    })
})

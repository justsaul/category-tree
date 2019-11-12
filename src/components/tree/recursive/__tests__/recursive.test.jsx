import React from 'react'
import { shallow } from 'enzyme'

import { Tree } from '../../../../utils/tree'
import { TreeRecursive } from '../'

describe('<TreeRecursive/>', () => {
    it('should render without exploding', () => {
        const Lambda = new Tree('Lambda')
        const wrapper = shallow(<TreeRecursive tree={Lambda} update={jest.fn()}/>)

        expect(wrapper).toMatchSnapshot()
    })

    it('should contain nested Tree as <TreeRecursive />', () => {
        const Lambda = new Tree('Lambda')
        Lambda.addChildren(new Tree('Children'))
        
        const wrapper = shallow(<TreeRecursive tree={Lambda} update={jest.fn()}/>)

        expect(wrapper.find(TreeRecursive).length).toBe(1)
    })
})

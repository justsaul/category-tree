import React from 'react'
import { shallow } from 'enzyme'

import { Tree } from '../../../../utils/tree'
import { TreeIterative } from '../'

describe('<TreeIterative/>', () => {
    it('should render without exploding', () => {
        const Lambda = new Tree('Lambda')
        const wrapper = shallow(
            <TreeIterative tree={Lambda} update={jest.fn()}/>
        )

        expect(wrapper).toMatchSnapshot()
    })
    it('should display elements nested', () => {
        const Lambda = new Tree('Lambda')
        Lambda.addChildren(new Tree('Children'))
        
        const wrapper = shallow(
            <TreeIterative tree={Lambda} update={jest.fn()} />
        )

        expect(wrapper.children().length).toEqual(2)
    })
})

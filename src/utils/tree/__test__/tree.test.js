import { Tree } from '../tree'

describe('Tree', () => {
    it('should create graph object', () => {
        const Loream = new Tree('Loream')

        expect(Loream.value).toBe('Loream')
    })

    it('should add children to current Tree', () => {
        const Loream = new Tree('Loream')
        Loream.addChildren(new Tree('Ibus'))

        expect(Loream.children.length).toEqual(1)
    })

    it('should contain other Trees inside', () => {
        const Loream = new Tree('Loream')
        Loream.addChildren(new Tree('Ibus'))

        expect(Loream.children[0] instanceof Tree).toBe(true)
    })
})

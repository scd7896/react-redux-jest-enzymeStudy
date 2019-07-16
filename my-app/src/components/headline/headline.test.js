import React from 'react';
import { shallow, mount, render, configure } from 'enzyme'
import Headline from './index'

import {findByTestAtrr} from '../../../Utils';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const setUp = (props ={})=>{
    const component = shallow(<Headline {...props}/>)
    return component
}

describe('헤드라인 커포넌트',()=>{
    describe('프롭스가 있을때', ()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
                header: 'Test header',
                desc :'Test desc'
            }
            wrapper = setUp(props)
        })

        it('에러가 없는 렌더',()=>{
            const component = findByTestAtrr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(1);
        })
        it('H1렌더?' , ()=>{
            const h1 = findByTestAtrr (wrapper ,'Header')
            expect(h1.length).toBe(1)
        })
        it('desc 렌더?', ()=>{
            const desc = findByTestAtrr(wrapper, 'desc')
            expect(desc.length).toBe(1)
        })
    })

    describe('프롭스가 없을 때 ', ()=>{
        let wrapper
        beforeEach(()=>{
            wrapper =setUp();
        })

        it('렌더링이 안되면 통과', ()=>{
            const component = findByTestAtrr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(0)
        })
    })
})

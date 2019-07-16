import React from 'react'
import { shallow, mount, render, configure } from 'enzyme'
import Header from './index'
import {findByTestAtrr} from '../../../Utils'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const setUp =(props ={})=>{
    const component = shallow(<Header {...props}/>)
    return component;
}


describe('헤더 컴포넌트', ()=>{
    
    let component;
    beforeEach(()=>{
        component = setUp();
    })

    it('헤더컴포넌트의 길이 1?',()=>{
        const wrapper = findByTestAtrr(component, 'headerComponent')
        expect(wrapper.length).toBe(1)
    })

    it('Should render a 로고', ()=>{
        const logo = findByTestAtrr(component,'logoIMG')
        expect(logo.length).toBe(1)
    })
})

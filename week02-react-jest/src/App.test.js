import React from 'react';
import ReactDOM from 'react-dom';
import {configure, shallow} from 'enzyme';
import App  from './App';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('Jest Create React Tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads H1 text', () => {
        const wrapper = shallow(<App/>);
        const welcome = <h1 className="App-title">Welcome to React</h1>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the word Nine', () => {
        const wrapper = shallow(<App />);
        console.log(wrapper);
        const welcome = <p className="App-intro">Nine: 0</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">Nine: 9</p>;
        wrapper.find('button.elf').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">firstName: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<App />);
        const firstName = <p className="App-intro">firstName: Patty</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(firstName)).toEqual(true);
    });

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">lastName: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of lastName after button click', () => {
        const wrapper = shallow(<App />);
        const lastName = <p className="App-intro">lastName: Murray</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(lastName)).toEqual(true);
    });

    it('renders and displays the default street', () => {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">street: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders state of street after button click', () => {
        const wrapper = shallow(<App />);
        const street = <p className="App-intro">street: 154 Russell Senate Office Building</p>;
        wrapper.find('button.setAddress').simulate('click');
        expect(wrapper.contains(street)).toEqual(true);
    });
});
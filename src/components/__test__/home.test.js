import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer';
import Home from '../home';

afterEach(() => {
    cleanup();
});

test('test whether sidebar component is present',() =>{
    render(<Home/>);
    const sidebarElement = screen.getByTestId('sidebar');
    expect(sidebarElement).toBeInTheDocument();
})

test('test whether Employee List component is present',() =>{
    render(<Home/>);
    const sidebarElement = screen.getByTestId('employeeList');
    expect(sidebarElement).toBeInTheDocument();
})



test('matches snapshot',() => {
const tree = renderer.create(<Home></Home>).toJSON();
expect(tree).toMatchSnapshot();
})
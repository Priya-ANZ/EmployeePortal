import { render,screen } from '@testing-library/react'
import React from 'react'
import ErrorBoundary from "../errorBoundary"

beforeEach(() =>{
    jest.spyOn(console,'error')
    console.error.mockImplementation(()=>{})
})

afterEach(() =>{
    console.error.mockRestore({})
})

const ChildComponent = () =>{
    throw new Error()
}

test('test Error Boundary',()=>{
      const {getByText} = render(<ChildComponent/>,{wrapper: ErrorBoundary})
      const errorMsg = getByText("Something went wrong");
      expect(errorMsg).toBeDefined()
    })
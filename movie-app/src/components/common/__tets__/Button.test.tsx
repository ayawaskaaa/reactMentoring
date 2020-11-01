import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Button from "../Button";

describe("test Button component", () => {
    afterEach(cleanup)
    it('should render correctly', function () {
        const mockOnClick = jest.fn();
        const type = 'button'
        const text = 'someText';
        const classes = 'someClass'
        const {asFragment} = render(<Button onClick={mockOnClick} classes={classes} text={text} type={type}/>)
        expect(asFragment).toMatchSnapshot();
        const element = screen.getByText(text);
        fireEvent.click(element)
        expect(element).not.toBeNull();
        expect(element.textContent).toBe(text);
        expect(element.getAttribute("type")).toBe(type);
        expect(element.getAttribute("class")).toBe(classes);
        expect(mockOnClick).toBeCalled();
    });
})
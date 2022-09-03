import React from 'react'
import { render,fireEvent } from '@testing-library/react'
import Button, { ButtonProps,ButtonSize,ButtonType }  from './button'
const defaultProps = {
    onClick: jest.fn()
  }
const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'klass'
  }
  
  const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn(),
  }
// jest -dom测试小公举
describe('test Button component', () => {
    it('should render the correct default button', () => {
      const view = render(<Button {...defaultProps}>Nice</Button>)
      const screen = view
      const element = screen.getByText('Nice') as HTMLButtonElement
      expect(element).toBeInTheDocument()
      expect(element.tagName).toEqual('BUTTON')
      expect(element).toHaveClass('btn btn-default')
      expect(element.disabled).toBeFalsy()
      fireEvent.click(element)
      expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it('should render the correct component based on different props', () => {
      const view = render(<Button {...testProps}>Nice</Button>)
      const screen = view
      const element = screen.getByText('Nice')
      expect(element).toBeInTheDocument()
      expect(element).toHaveClass('btn-primary btn-lg klass')
    })
    it('should render a link when btnType equals link and href is provided', () => {
      const view = render(<Button btnType={ButtonType.Link} href="http://dummyurl">Link</Button>)
      const screen = view
      const element = screen.getByText('Link')
      expect(element).toBeInTheDocument()
      expect(element.tagName).toEqual('A')  
      expect(element).toHaveClass('btn btn-link')
    })
    it('should render disabled button when disabled set to true', () => {
      const view = render(<Button {...disabledProps}>Nice</Button>)
      const screen = view
      const element = screen.getByText('Nice') as HTMLButtonElement
      expect(element).toBeInTheDocument()
      expect(element.disabled).toBeTruthy()
      fireEvent.click(element)
      expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
  })
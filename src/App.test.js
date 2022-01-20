import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


//check components
test('check if addition button renders', () => {
  render(<App />)
  const button = screen.getByText('+')
  expect(button).toBeInTheDocument()
})

test('check if minus button renders', () => {
  render(<App />)
  const button = screen.getByText('-')
  expect(button).toBeInTheDocument()
})

test('check if equal button renders', () => {
  render(<App />)
  const button = screen.getByText('=')
  expect(button).toBeInTheDocument()
})

test('check if divide button renders', () => {
  render(<App />)
  const button = screen.getByText('/')
  expect(button).toBeInTheDocument()
})

test('check if multiply button renders', () => {
  render(<App />)
  const button = screen.getByText('X')
  expect(button).toBeInTheDocument()
})

test('check if result initial display is 0', () => {
  render(<App />)
  const displayElement = screen.getByTitle('screen')
  expect(displayElement.innerHTML).toBe('0')
})

test('check if display is updating upon clicking buttons', () => {
  render(<App />)
  const button = screen.getByText('1')
  fireEvent.click(button)
  const displayElement = screen.getByTitle('screen')
  expect(displayElement.innerHTML).toBe('1')
})


test('check if C is working', () => {
  render(<App />)
  const button = screen.getByText('1')
  const clearButton = screen.getByText('C')
  fireEvent.click(button)
  fireEvent.click(clearButton)
  const displayElement = screen.getByTitle('screen')
  expect(displayElement.innerHTML).toBe('0')
})

test('check if . is working', () => {
  render(<App />)
  const button = screen.getByText('.')
  fireEvent.click(button)
  expect(button).toBeInTheDocument()
})
//end check components


//test logic/operations
test('check if addition is working', () => {
  render(<App />)
  const buttonOne = screen.getByText('1')
  const buttonNine = screen.getByText('9')
  const add = screen.getByText('+')
  const equals = screen.getByText('=')
  fireEvent.click(buttonOne)
  fireEvent.click(add)
  fireEvent.click(buttonNine)
  fireEvent.click(equals)
  const displayElement = screen.getByTitle('screen')
  expect(displayElement.innerHTML).toBe((10).toString())
})

test('check if subtraction is working', () => {
  render(<App />)
  const buttonOne = screen.getByText('1')
  const buttonNine = screen.getByText('9')
  const minus = screen.getByText('-')
  const equals = screen.getByText('=')
  fireEvent.click(buttonOne)
  fireEvent.click(minus)
  fireEvent.click(buttonNine)
  fireEvent.click(equals)
  const displayElement = screen.getByTitle('screen')
  expect(displayElement.innerHTML).toBe((-8).toString())
})

test('check if multiply is working', () => {
  render(<App />)
  const buttonOne = screen.getByText('1')
  const buttonNine = screen.getByText('9')
  const times = screen.getByText('X')
  const equals = screen.getByText('=')
  fireEvent.click(buttonOne)
  fireEvent.click(times)
  fireEvent.click(buttonNine)
  fireEvent.click(equals)
  const displayElement = screen.getByTitle('screen')
  expect(displayElement.innerHTML).toBe((9).toString())
})

test('check if division is working', () => {
  render(<App />)
  const buttonNine = screen.getByText('9')
  const buttonThree = screen.getByText('3')
  const divide = screen.getByText('/')
  const equals = screen.getByText('=')
  fireEvent.click(buttonNine)
  fireEvent.click(divide)
  fireEvent.click(buttonThree)
  fireEvent.click(equals)
  const displayElement = screen.getByTitle('screen')
  expect(displayElement.innerHTML).toBe((3).toString())
})

test('check if decimal is working', () => {
  render(<App />)
  const buttonOne = screen.getByText('1')
  const buttonNine = screen.getByText('9')
  const decimal = screen.getByText('.')
  const add = screen.getByText('+')
  const equals = screen.getByText('=')
  fireEvent.click(buttonOne)
  fireEvent.click(decimal)
  fireEvent.click(buttonNine)
  fireEvent.click(add)
  fireEvent.click(buttonNine)
  fireEvent.click(equals)
  const displayElement = screen.getByTitle('screen')
  expect(displayElement.innerHTML).toBe((10.9).toString())
})

//test logic/operations
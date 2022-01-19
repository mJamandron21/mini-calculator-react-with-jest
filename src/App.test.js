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
  const button = screen.getByText('÷')
  expect(button).toBeInTheDocument()
})

test('check if multiply button renders', () => {
  render(<App />)
  const button = screen.getByText('x')
  expect(button).toBeInTheDocument()
})

test('check if display is updating upon clicking buttons', () => {
  render(<App />)
  const button = screen.getByText('0')
  fireEvent.click(button)
  const displayElement = screen.getByTitle('result')
  expect(displayElement.innerHTML).toBe('0')
})


test('check if AC is working', () => {
  render(<App />)
  const button = screen.getByText('1')
  const allClearButton = screen.getByText('AC')
  fireEvent.click(button)
  fireEvent.click(allClearButton)
  const displayElement = screen.getByTitle('result')
  expect(displayElement.innerHTML).toBe('')
})

test('check if CE is working', () => {
  render(<App />)
  const button = screen.getByText('1')
  const clearButton = screen.getByText('C')
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(clearButton)
  const displayElement = screen.getByTitle('result')
  expect(displayElement.innerHTML).toBe('1')
})

test('check if . is working', () => {
  render(<App />)
  const button = screen.getByText('.')
  fireEvent.click(button)
  const displayElement = screen.getByTitle('result')
  expect(displayElement.innerHTML).toBe('.')
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
  const displayElement = screen.getByTitle('result')
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
  const displayElement = screen.getByTitle('result')
  expect(displayElement.innerHTML).toBe((-8).toString())
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
  const displayElement = screen.getByTitle('result')
  expect(displayElement.innerHTML).toBe((10.9).toString())
})

//test logic/operations
import AgeCalculatorApp from '@challenges/age-calculator-app'
import { cleanup, findByText, fireEvent, render, screen } from '@testing-library/react'

describe('Age Calculator App challenge test', () => {
  afterEach(cleanup)

  it('El campo "YEAR" es obligatorio', async () => {
    render(<AgeCalculatorApp />)

    const input = screen.getByLabelText('YEAR', { selector: 'input' })
    fireEvent.change(input, { target: { value: '' } })

    const button = document.getElementById('button')
    fireEvent.click(button)

    const container = document.getElementById('year-helper-text')
    await findByText(container, /This field is required/i)
  })

  // it('Campo de "YEAR" tiene un año superior al actual', async () => {
  //   render(<AgeCalculatorApp />)

  //   const input = screen.getByLabelText('YEAR', { selector: 'input' })
  //   fireEvent.change(input, { target: { value: '9999' } })

  //   const button = document.getElementById('button')
  //   fireEvent.click(button)

  //   await screen.findByText(/Must be in the past/i)
  // })

  it('El campo "MONTH" es obligatorio', async () => {
    render(<AgeCalculatorApp />)

    const input = screen.getByLabelText('MONTH', { selector: 'input' })
    fireEvent.change(input, { target: { value: '' } })

    const button = document.getElementById('button')
    fireEvent.click(button)

    const container = document.getElementById('month-helper-text')
    await findByText(container, /This field is required/i)
  })

  // it('Campo de "MONTH" tiene un numero de mes superior a 12', async () => {
  //   render(<AgeCalculatorApp />)

  //   const input = screen.getByLabelText('MONTH', { selector: 'input' })
  //   fireEvent.change(input, { target: { value: '15' } })

  //   const button = document.getElementById('button')
  //   fireEvent.click(button)

  //   await screen.findByText(/Must be a valid month/i)
  // })

  it('El campo "DAY" es obligatorio', async () => {
    render(<AgeCalculatorApp />)

    const input = screen.getByLabelText('DAY', { selector: 'input' })
    fireEvent.change(input, { target: { value: '' } })

    const button = document.getElementById('button')
    fireEvent.click(button)

    const container = document.getElementById('day-helper-text')
    await findByText(container, /This field is required/i)
  })
})

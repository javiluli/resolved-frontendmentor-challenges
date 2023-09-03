import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'

import CalculatorApp from '@challenges/calculator-app'
import { OTHER_MESSAGE } from '@challenges/calculator-app/constant'

let btn_1,
  btn_2,
  btn_3,
  btn_4,
  btn_5,
  btn_6,
  btn_7,
  btn_8,
  btn_9,
  btn_0,
  btnDot,
  btnAdd,
  btnSubtract,
  btnMultiply,
  btnDivide,
  btnEqual,
  btnReset,
  screenResult

describe('CalculatorApp component main test', () => {
  beforeEach(() => {
    render(<CalculatorApp />)
    btn_1 = screen.getByTestId('btn-1')
    btn_2 = screen.getByTestId('btn-2')
    btn_3 = screen.getByTestId('btn-3')
    btn_4 = screen.getByTestId('btn-4')
    btn_5 = screen.getByTestId('btn-5')
    btn_6 = screen.getByTestId('btn-6')
    btn_7 = screen.getByTestId('btn-7')
    btn_8 = screen.getByTestId('btn-8')
    btn_9 = screen.getByTestId('btn-9')
    btn_0 = screen.getByTestId('btn-0')
    btnDot = screen.getByTestId('btn-dot')
    btnAdd = screen.getByTestId('btn-add')
    btnSubtract = screen.getByTestId('btn-subtract')
    btnMultiply = screen.getByTestId('btn-multiply')
    btnDivide = screen.getByTestId('btn-divide')
    btnEqual = screen.getByTestId('btn-equal')
    btnReset = screen.getByTestId('btn-reset')
    screenResult = screen.getByTestId('screen-result')
  })
  afterEach(cleanup)

  it('El componentne principal "CalculatorApp" se renderiza correctamente', () => {
    render(<CalculatorApp />)
  })

  it('Resolver el calculo 200+150-40 con reultado 310', async () => {
    render(<CalculatorApp />)

    /* Numeros para el calculo */
    // 200
    fireEvent.click(btn_2)
    fireEvent.click(btn_0)
    fireEvent.click(btn_0)
    // +150
    fireEvent.click(btnAdd)
    fireEvent.click(btn_1)
    fireEvent.click(btn_5)
    fireEvent.click(btn_0)
    // -40
    fireEvent.click(btnSubtract)
    fireEvent.click(btn_4)
    fireEvent.click(btn_0)

    // Vista en la pantalla de la calculadora
    expect(screenResult.textContent).toBe('200+150-40')

    // Resultado esperado
    fireEvent.click(btnEqual)
    expect(screenResult.textContent).toBe('310')

    // Reset de la calculadora
    fireEvent.click(btnReset)
    expect(screenResult.textContent).toBe(OTHER_MESSAGE.CALCULATOR)
  })

  it('Resolver el calculo 97/5-2*-6 con reultado 45.5', async () => {
    render(<CalculatorApp />)

    /* Numeros para el calculo */
    // 97
    fireEvent.click(btn_9)
    fireEvent.click(btn_7)
    // /5
    fireEvent.click(btnDivide)
    fireEvent.click(btn_5)
    // -2
    fireEvent.click(btnSubtract)
    fireEvent.click(btn_2)
    // *-6
    fireEvent.click(btnMultiply)
    fireEvent.click(btnSubtract)
    fireEvent.click(btn_6)

    // Vista en la pantalla de la calculadora
    expect(screenResult.textContent).toBe('97/5-2*-6')

    // Resultado esperado
    fireEvent.click(btnEqual)
    expect(screenResult.textContent).toBe('31.4')

    // Reset de la calculadora
    fireEvent.click(btnReset)
    expect(screenResult.textContent).toBe(OTHER_MESSAGE.CALCULATOR)
  })

  it(`Resolver varios calculos utilizando el ultimo resultado en la siguiente operacion:
      1. Resolver el calculo 35-9 con reultado 26, 
      2. Resolver el calculo concatenar el resultado anterior 26*3/-5 con resultado -15.6, 
      3. Resolver el calculo concatenar el resultado anterior -15.6*3.21 con resultado final -50.076`, async () => {
    render(<CalculatorApp />)

    /** ### Numeros para el calculo ### */
    /** Calculo 1º */
    // 35
    fireEvent.click(btn_3)
    fireEvent.click(btn_5)
    // -9
    fireEvent.click(btnSubtract)
    fireEvent.click(btn_9)

    // Vista en la pantalla de la calculadora
    expect(screenResult.textContent).toBe('35-9')

    // Resultado esperado
    fireEvent.click(btnEqual)
    expect(screenResult.textContent).toBe('26')

    /** Calculo 2º */
    // *3
    fireEvent.click(btnMultiply)
    fireEvent.click(btn_3)
    // /-5
    fireEvent.click(btnDivide)
    fireEvent.click(btnSubtract)
    fireEvent.click(btn_5)

    // Vista en la pantalla de la calculadora
    expect(screenResult.textContent).toBe('26*3/-5')

    // Resultado esperado
    fireEvent.click(btnEqual)
    expect(screenResult.textContent).toBe('-15.6')

    /** Calculo 3º */
    // *3.28
    fireEvent.click(btnMultiply)
    fireEvent.click(btn_3)
    fireEvent.click(btnDot)
    fireEvent.click(btn_2)
    fireEvent.click(btn_8)

    // Vista en la pantalla de la calculadora
    expect(screenResult.textContent).toBe('-15.6*3.28')

    // Resultado esperado
    fireEvent.click(btnEqual)
    expect(screenResult.textContent).toBe('-51.168')

    // Reset de la calculadora
    fireEvent.click(btnReset)
    expect(screenResult.textContent).toBe(OTHER_MESSAGE.CALCULATOR)
  })
})

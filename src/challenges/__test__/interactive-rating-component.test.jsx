import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import InteractiveRatingComponent from '@challenges/interactive-rating-component'

let ratingPick, ratingPick_1, ratingPick_2, ratingPick_3, ratingPick_4, ratingPick_5, btnSubmit

const TITLE_HOW_DID_WE_DO = /how did we do?/i
const TITKE_THANK_YOU = /thank you!/i

/**
 * NOTA: El valor inicial por defecto es 2 (2 estrellas)
 * NOTA: No se permite el valor 0
 */

describe('Interactive Rating Component challenge test', () => {
  beforeEach(() => {
    render(<InteractiveRatingComponent />)
    ratingPick = document.getElementsByName('rating-pick')
    ratingPick_1 = ratingPick[0] // value 1
    ratingPick_2 = ratingPick[1] // value 2
    ratingPick_3 = ratingPick[2] // value 3
    ratingPick_4 = ratingPick[3] // value 4
    ratingPick_5 = ratingPick[4] // value 5

    btnSubmit = screen.getByRole('submitbutton')
  })
  afterEach(cleanup)

  it('Valor por defecto, 2 estrellas, enviar sin cambiar', () => {
    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeDefined()

    fireEvent.click(btnSubmit)

    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeNull()
    expect(screen.queryByText(TITKE_THANK_YOU)).toBeDefined()
    expect(screen.getByTestId('selected-out').textContent).toBe('You selected 2 out of 5')
  })

  it('Seleccionar 4 estrellas y enviar', () => {
    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeDefined()

    fireEvent.click(ratingPick_4)
    fireEvent.click(btnSubmit)

    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeNull()
    expect(screen.queryByText(TITKE_THANK_YOU)).toBeDefined()
    expect(screen.getByTestId('selected-out').textContent).toBe('You selected 4 out of 5')
  })

  it('Seleccionar 1 estrellas y enviar', () => {
    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeDefined()

    fireEvent.click(ratingPick_1)
    fireEvent.click(btnSubmit)

    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeNull()
    expect(screen.queryByText(TITKE_THANK_YOU)).toBeDefined()
    expect(screen.getByTestId('selected-out').textContent).toBe('You selected 1 out of 5')
  })

  it('Seleccionar 2 estrellas, cambiar a 5 estrellas y enviar', () => {
    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeDefined()

    fireEvent.click(ratingPick_2)
    fireEvent.click(ratingPick_5)
    fireEvent.click(btnSubmit)

    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeNull()
    expect(screen.queryByText(TITKE_THANK_YOU)).toBeDefined()
    expect(screen.getByTestId('selected-out').textContent).toBe('You selected 5 out of 5')
  })

  it('Seleccionar 5 estrellas, cambiar a 4 estrellas y enviar', () => {
    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeDefined()

    fireEvent.click(ratingPick_5)
    fireEvent.click(ratingPick_3)
    fireEvent.click(btnSubmit)

    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeNull()
    expect(screen.queryByText(TITKE_THANK_YOU)).toBeDefined()
    expect(screen.getByTestId('selected-out').textContent).toBe('You selected 3 out of 5')
  })

  it('Seleccionar 5 estrellas, repetir para dejarlo sin seleccionar y seleccionar 1 estrellas', () => {
    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeDefined()

    fireEvent.click(ratingPick_5)
    fireEvent.click(ratingPick_5)
    fireEvent.click(ratingPick_1)
    fireEvent.click(btnSubmit)

    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeNull()
    expect(screen.queryByText(TITKE_THANK_YOU)).toBeDefined()
    expect(screen.getByTestId('selected-out').textContent).toBe('You selected 1 out of 5')
  })

  it('Seleccionar 1 estrellas, repetir para dejarlo sin seleccionar y seleccionar 4 estrellas', () => {
    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeDefined()

    fireEvent.click(ratingPick_1)
    fireEvent.click(ratingPick_1)
    fireEvent.click(ratingPick_4)
    fireEvent.click(btnSubmit)

    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeNull()
    expect(screen.queryByText(TITKE_THANK_YOU)).toBeDefined()
    expect(screen.getByTestId('selected-out').textContent).toBe('You selected 4 out of 5')
  })

  it('Seleccionar 2 estrellas para dejarlo sin seleccionar, seleccionar 4 estrellas y cambiar a 1', () => {
    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeDefined()

    fireEvent.click(ratingPick_2)
    fireEvent.click(ratingPick_4)
    fireEvent.click(ratingPick_1)
    fireEvent.click(btnSubmit)

    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeNull()
    expect(screen.queryByText(TITKE_THANK_YOU)).toBeDefined()
    expect(screen.getByTestId('selected-out').textContent).toBe('You selected 1 out of 5')
  })

  it('Seleccionar 2 estrellas para dejarlo sin seleccionar, seleccionar 2 estrellas y cambiar a 5', () => {
    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeDefined()

    fireEvent.click(ratingPick_2)
    fireEvent.click(ratingPick_5)
    fireEvent.click(btnSubmit)

    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeNull()
    expect(screen.queryByText(TITKE_THANK_YOU)).toBeDefined()
    expect(screen.getByTestId('selected-out').textContent).toBe('You selected 5 out of 5')
  })

  it('Seleccionar 4 estrellas, enviar y volver', () => {
    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeDefined()

    fireEvent.click(ratingPick_4)
    fireEvent.click(btnSubmit)

    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeNull()
    expect(screen.queryByText(TITKE_THANK_YOU)).toBeDefined()
    expect(screen.getByTestId('selected-out').textContent).toBe('You selected 4 out of 5')

    const btnReset = screen.getByLabelText('reset vote')
    fireEvent.click(btnReset)

    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeDefined()
    expect(screen.queryByText(TITKE_THANK_YOU)).toBeNull()
  })

  it('Seleccionar 1 estrellas, enviar y volver', () => {
    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeDefined()

    fireEvent.click(ratingPick_1)
    fireEvent.click(btnSubmit)

    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeNull()
    expect(screen.queryByText(TITKE_THANK_YOU)).toBeDefined()
    expect(screen.getByTestId('selected-out').textContent).toBe('You selected 1 out of 5')

    const btnReset = screen.getByLabelText('reset vote')
    fireEvent.click(btnReset)

    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeDefined()
    expect(screen.queryByText(TITKE_THANK_YOU)).toBeNull()
  })

  it('Seleccionar 1 estrellas, enviar, volver, marcar de nuevo 4 estrellas y enviar', () => {
    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeDefined()

    fireEvent.click(ratingPick_1)
    fireEvent.click(btnSubmit)

    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeNull()
    expect(screen.queryByText(TITKE_THANK_YOU)).toBeDefined()
    expect(screen.getByTestId('selected-out').textContent).toBe('You selected 1 out of 5')

    const btnReset = screen.getByLabelText('reset vote')
    fireEvent.click(btnReset)

    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeDefined()
    expect(screen.queryByText(TITKE_THANK_YOU)).toBeNull()

    ratingPick_5 = document.getElementsByName('rating-pick')[4]
    btnSubmit = screen.getByRole('submitbutton')
    fireEvent.click(ratingPick_5)
    fireEvent.click(btnSubmit)

    expect(screen.queryByText(TITLE_HOW_DID_WE_DO)).toBeNull()
    expect(screen.queryByText(TITKE_THANK_YOU)).toBeDefined()
    expect(screen.getByTestId('selected-out').textContent).toBe('You selected 5 out of 5')
  })
})

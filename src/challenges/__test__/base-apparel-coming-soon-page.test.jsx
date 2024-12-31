import BaseApparelComingSoonPage from '@challenges/base-apparel-coming-soon-page'
import { ErrorMessage } from '@challenges/base-apparel-coming-soon-page/constants'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

let txtEmail, txtEmailHelperText, btnSubmit

describe('Base Apparel Coming SoonPage challenge test', () => {
  beforeEach(() => {
    render(<BaseApparelComingSoonPage />)
    txtEmail = screen.getByPlaceholderText('Email Address')
    btnSubmit = screen.getByTestId('btn-submit')
  })
  afterEach(cleanup)

  it('Correo electrónico válidoo', async () => {
    fireEvent.change(txtEmail, { target: { value: 'ejemplo@email.com' } })
    fireEvent.click(btnSubmit)
    txtEmailHelperText = screen.getByTestId('txt-email-helper-text')
    expect(txtEmailHelperText.textContent).toBe('')
  })

  it('Correo electrónico válido con subdominio', async () => {
    fireEvent.change(txtEmail, { target: { value: 'usuario-con-guion@email.com' } })
    fireEvent.click(btnSubmit)
    txtEmailHelperText = screen.getByTestId('txt-email-helper-text')
    expect(txtEmailHelperText.textContent).toBe('')
  })

  it('Correo electrónico válido con guión en el nombre de usuario', async () => {
    fireEvent.change(txtEmail, { target: { value: 'usuario@subdominio.ejemplo.com' } })
    fireEvent.click(btnSubmit)
    txtEmailHelperText = screen.getByTestId('txt-email-helper-text')
    expect(txtEmailHelperText.textContent).toBe('')
  })

  it('Correo electrónico válido con números en el nombre de usuario', async () => {
    fireEvent.change(txtEmail, { target: { value: 'usuario123@email.com' } })
    fireEvent.click(btnSubmit)
    txtEmailHelperText = screen.getByTestId('txt-email-helper-text')
    expect(txtEmailHelperText.textContent).toBe('')
  })

  it('Correo electrónico válido con extensión de dominio de 4 letras', async () => {
    fireEvent.change(txtEmail, { target: { value: 'usuario@ejemplo.info' } })
    fireEvent.click(btnSubmit)
    txtEmailHelperText = screen.getByTestId('txt-email-helper-text')
    expect(txtEmailHelperText.textContent).toBe('')
  })

  it('Correo electrónico válido con extensión de dominio de 3 letras', async () => {
    fireEvent.change(txtEmail, { target: { value: 'usuario@ejemplo.co' } })
    fireEvent.click(btnSubmit)
    txtEmailHelperText = screen.getByTestId('txt-email-helper-text')
    expect(txtEmailHelperText.textContent).toBe('')
  })

  it('Correo electrónico inválido sin símbolo "@"', async () => {
    fireEvent.change(txtEmail, { target: { value: 'correo.sin.at.com' } })
    fireEvent.click(btnSubmit)
    txtEmailHelperText = screen.getByTestId('txt-email-helper-text')
    expect(txtEmailHelperText.textContent).toBe(ErrorMessage.PROVIDE_VALID_EMAIL)
  })

  it('Correo electrónico inválido con espacio en blanco', async () => {
    fireEvent.change(txtEmail, { target: { value: 'correo con espacios@email.com' } })
    fireEvent.click(btnSubmit)
    txtEmailHelperText = screen.getByTestId('txt-email-helper-text')
    expect(txtEmailHelperText.textContent).toBe(ErrorMessage.PROVIDE_VALID_EMAIL)
  })

  it('Correo electrónico inválido sin extensión de dominio', async () => {
    fireEvent.change(txtEmail, { target: { value: 'usuario@ejemplo' } })
    fireEvent.click(btnSubmit)
    txtEmailHelperText = screen.getByTestId('txt-email-helper-text')
    expect(txtEmailHelperText.textContent).toBe(ErrorMessage.PROVIDE_VALID_EMAIL)
  })

  it('Correo electrónico inválido con caracteres especiales no permitidos', async () => {
    fireEvent.change(txtEmail, { target: { value: 'usuario&@email.com' } })
    fireEvent.click(btnSubmit)
    txtEmailHelperText = screen.getByTestId('txt-email-helper-text')
    expect(txtEmailHelperText.textContent).toBe(ErrorMessage.PROVIDE_VALID_EMAIL)
  })
})

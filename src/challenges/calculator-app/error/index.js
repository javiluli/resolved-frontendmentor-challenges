export class ZeroDivisionError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ZeroDivisionError'
  }
}

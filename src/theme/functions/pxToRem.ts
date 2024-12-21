interface PxToRem {
  (number: number, baseNumber?: number): string
}

const pxToRem: PxToRem = (number, baseNumber = 16) => {
  return `${number / baseNumber}rem`
}

export default pxToRem

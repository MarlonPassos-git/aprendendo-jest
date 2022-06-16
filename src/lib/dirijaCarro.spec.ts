import { dirijaCarro } from './dirijaCarro'

describe('dirijaCarro', () => {
  let uno: jest.Mock<any, any>
  beforeEach(() => { 
    uno = jest.fn()
  })

  it('Older person must be albe to drive a car', () => {
    dirijaCarro(uno, 20)

    expect(uno).toBeCalled()
  })

  it('underage person should not be able to drive a car', () => {
    dirijaCarro(uno, 17)

    expect(uno).not.toBeCalled()
  })

  it('uma person of minimum age must be able to drive a car', () => {
    dirijaCarro(uno, 18) 

    expect(uno).toBeCalled()
  })

  it()
})

import { execultaEssaPorraAee } from './execultaEssaPorraAee'

describe('execultaEssaPorraAee', () => {
	let callback: jest.Mock<any, any>
	beforeEach(() => {
		callback = jest.fn()
	})
  it(' must execute the function n times', () => {
		execultaEssaPorraAee(3, callback)
    
    expect(callback).toBeCalledTimes(3)
  })
  
  it('don\'t execute the function', () => {
		execultaEssaPorraAee(0, callback)

		expect(callback).toBeCalledTimes(0)
	})
})

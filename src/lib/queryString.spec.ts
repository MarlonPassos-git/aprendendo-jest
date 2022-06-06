import { queryString, parse } from './queryString'

describe('Object to query string', () => {
  it('should create a valid query string when an object is passed', () => {
    const useData = {
      name: 'Marlon',
      profession: 'desenvolvimento',
    }
    const queryStringValid = 'name=Marlon&profession=desenvolvimento'

    expect(queryString(useData)).toEqual(queryStringValid)
  })

  it('Espero que funcione quando o valor for arrays', () => {
    const useData = {
			name: 'Marlon',
      profession: 'desenvolvimento',
      languages: ['js', 'ts'],
		}
		const queryStringValid = 'name=Marlon&profession=desenvolvimento&languages=js,ts'

		expect(queryString(useData)).toEqual(queryStringValid)
  })
})

describe('Parse a query String to object', () => {
  it('deve retorna o objeto', () => {
		const useData = {
			name: 'Marlon',
			profession: 'desenvolvimento',
		}
		const queryStringValid = 'name=Marlon&profession=desenvolvimento'

		expect(parse(queryStringValid)).toEqual(useData)
  })
  
  it('deve converter uma quert string com uma parametro em objeto ', () => {
		const useData = {
			name: 'Marlon',
		}
		const queryStringValid = 'name=Marlon'

		expect(parse(queryStringValid)).toEqual(useData)
	})

  it('deve retorna o objeto com array', () => {
		const useData = {
			name: 'Marlon',
			languages: ['js', 'ts'],
		}
		const queryStringValid = 'name=Marlon&languages=js,ts'

		expect(parse(queryStringValid)).toEqual(useData)
	})
})

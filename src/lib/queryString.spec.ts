import { queryString } from './queryString'

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

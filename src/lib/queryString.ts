describe('Object to query string', () => {
  it('should create a valid query string when an object is passed', () => {
    const useData = { 
      name: 'Marlon',
      profession: 'desenvolvimento'
    }
    const result = 'Olá eu sou o Marlon e trabalho com desenvolvimento'

    expect(queryString(useData)).toEqual(result)
  });

});
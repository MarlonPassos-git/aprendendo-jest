describe('Object to query string', () => {
  it('should create a valid query string when an object is passed', () => {
    const useData = { 
      name: 'Marlon',
      profession: 'desenvolvimento'
    }
    const queryStringValid =  'name=Fabio&profession'

    expect(queryString(useData)).toEqual(queryStringValid)
  });

});

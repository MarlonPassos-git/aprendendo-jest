type IQueryString = Record<string, string>

/**
 * Converte um objeto em uma QueryString
 * 
 * @see {@link https://en.wikipedia.org/wiki/Query_string  oque é queryString?}
 */
export function queryString(obj: IQueryString):string {
  const keys = Object.keys(obj);

  let queryStringAll = keys.reduce(( queryString, key) => {
    const value = obj[key]
    return `${queryString}${key}=${value}&` 
  }, '')
  queryStringAll = queryStringAll.slice()

  return queryStringAll
}

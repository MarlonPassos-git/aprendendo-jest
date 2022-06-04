import { removeLastCaracter } from '../utils/removeLastCaracter'

type IQueryString = Record<string, string | string[]>;

/**
 * Converte um objeto em uma QueryString
 *
 * @see {@link https://en.wikipedia.org/wiki/Query_string  oque é queryString?}
 */
export function queryString(obj: IQueryString): string {
  const entries = Object.entries(obj)

  let queryStringAll = entries.reduce((queryString, [key, value] ) => {
    return `${queryString}${key}=${value}&`
  }, '')
  queryStringAll = removeLastCaracter(queryStringAll)
  
return queryStringAll
}

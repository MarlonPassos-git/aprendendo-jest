import type { IQueryString } from '../types/QueryString'
import { joinArrayOjectIntoOne } from '../utils/joinArrayOjectIntoOne'
import { removeLastCaracter } from '../utils/removeLastCaracter'
import { transformStringWithSymbolEqualtoObject } from '../utils/transformStringWithSymbolEqualtoObject'

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


/**
 * Transforma uma queryString em um objeto
 */
export function parse(queryString: string): IQueryString {
  const ObjectList = queryString
    .split('&')
    .map(transformStringWithSymbolEqualtoObject)
  const obj = joinArrayOjectIntoOne(ObjectList)

  return obj
}

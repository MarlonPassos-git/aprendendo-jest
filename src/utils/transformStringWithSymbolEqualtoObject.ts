import { IQueryString } from '../types/QueryString'

/**
 * Transforma uma sting que contem um "=" em um objeto
 * 
 * @example
 * // { nome: 'marlon' }
 * transformStringWithSymbolEqualtoObject('nome=marlon') 
 */
export function transformStringWithSymbolEqualtoObject(str: string): IQueryString {
  const [key, value] = str.split('=')
  
  return { [key]: value}
}

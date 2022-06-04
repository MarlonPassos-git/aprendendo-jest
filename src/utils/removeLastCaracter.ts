/**
 * retorna a ultima letra de uma sting
 * 
 * @example 
 * removeLastCaracter("word") / "wor" 
 * removeLastCaracter("aaa") // "aa"
 */
export function removeLastCaracter(text: string): string {  
  const totaletersRemaining = text.length  - 1 

  return text.slice(0, totaletersRemaining)
}

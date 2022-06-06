/**
 * junta um array de objetos e retorna uma unico objeto
 */
export function joinArrayOjectIntoOne(arrayOfObjects: any[]): any {
  return arrayOfObjects.reduce((accumulator, currentValue) => {
    return { ...accumulator, ...currentValue }
  }, {})

}

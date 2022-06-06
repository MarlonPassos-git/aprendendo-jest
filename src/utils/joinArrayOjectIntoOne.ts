/**
 * junta um array de objetos e retorna uma unico objeto
 */
export function joinArrayOjectIntoOne(
	arrayOfObjects: Record<string, string | string[]>[],
): Record<string, string | string[]> {
	return arrayOfObjects.reduce((accumulator, currentValue) => {
		const [key] = Object.keys(currentValue)
		const hasComma = currentValue[key].includes(',')

		console.log(hasComma)
		if (hasComma) { 
			const value = currentValue[key] as unknown as string
			const arrayValues = value.split(',') 
			
			return { ...accumulator, [key]: arrayValues } 
		}
		
		return { ...accumulator, ...currentValue }
	}, {})
}
/**
 * junta um array de objetos e retorna uma unico objeto
 */
export function joinArrayOjectIntoOne<T>(
	arrayOfObjects: Record<string, T>[],
): Record<string, T> {
	return arrayOfObjects.reduce((accumulator, currentValue) => {
		return { ...accumulator, ...currentValue }
	}, {})
}

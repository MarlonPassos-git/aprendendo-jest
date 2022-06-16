/**
 * execultaEssaPorraAee
 */
export function execultaEssaPorraAee(n: number, callback: () => unknown) {
	for (let i = 0; i < n; i++) {
		callback()
	}
}

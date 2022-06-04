/**
 * Soma dois números
 */
export function sum(a: number, b: number): number {
  if (a === Infinity || b === Infinity) {
    throw new Error('we can\'t handle ininite values');
  }

  return a + b;
}

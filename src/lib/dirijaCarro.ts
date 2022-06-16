/**
 * Se pessoa vai poder dirigir o carro
 */
export function dirijaCarro(callback: () => unknown, idade: number) {
  const maiorIdade = idade >= 18
  if (!maiorIdade) return
    
  callback()
}




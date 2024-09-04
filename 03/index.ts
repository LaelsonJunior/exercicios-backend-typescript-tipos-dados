const tabuada = (numeros: number[]): string => {
    let multiplicacao: string = '';

    for (const n of numeros) {
        for (let i = 0; i <= 10; i++) {
            multiplicacao += `${n} X ${i} = ${n*i} \n`
            
        }
        multiplicacao += `---------------\n`
    }
    
    
    return multiplicacao
}

const teste: number[] = [1, 5, 2]

console.log(tabuada(teste));

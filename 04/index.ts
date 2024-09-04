const vizualizadorEntiqueta = (entiqueta: {
    produto: string, 
    lote: number, 
    ano: number, 
    qtd: number
}): string[] => {

    let res: string[] = []
    
    for (let i = 1; i <= entiqueta.qtd ; i++) {
        res.push(`${entiqueta.lote}-${entiqueta.ano}-${i.toString().padStart(3, '0')}`)
        
    }

    return res
}

const exemplo = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

console.log(vizualizadorEntiqueta(exemplo));

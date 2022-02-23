export default function Calculation (firstTerm: string , secondTerm: string = "0"):any {
    
    const type = firstTerm.replace(/[-.]?\d/g,'')

    const operation: any = {
        "+": (a: string, b: string) => Number(a) + Number(b),
        "-": (a: string, b: string) => Number(a) - Number(b),
        "÷": (a: string, b: string) => Number(a) / Number(b),
        "x": (a: string, b: string) => Number(a) * Number(b),
        "=": (a: string, b: string) => Number(b),
    }
    return operation[type](firstTerm.match(/[\d.]/g)?.join(''), secondTerm)
}


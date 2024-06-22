export function analyzeArray(arr) {
    return {
        min: arr.reduce((a,b) => { return Math.min(a,b)}),
        max: arr.reduce((a,b) => { return Math.max(a,b)}),
        average: arr.reduce((a,b) => { return (a+b)})/(arr.length),
        length: arr.length
    }
}


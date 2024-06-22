const calculator = (() => {
    function add(a,b) {
        return a+b
    }
    function substract(a,b) {
        return a-b
    }
    function multiply(a,b) {
        return a*b
    }
    function divide(a,b) {
        if (b==0) return 'error'
        return a/b
    }
    return {
        add,
        substract,
        multiply,
        divide
    }
})()

export {calculator}
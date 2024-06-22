export function caesarCipher(str, shift) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const validShift = transformToValidIndex(shift)
    function transformToValidIndex(index) {
        return index % 26
    }
    function shiftCharacter(char) {
        let upperCase = false
        if (char.toUpperCase() == char) {
            char = char.toLowerCase()
            upperCase = true
        }
        let charIndex = alphabet.indexOf(char)
        if (charIndex >= 0) {
            return upperCase ? 
            alphabet[transformToValidIndex(shift+charIndex)].toUpperCase() :
            alphabet[transformToValidIndex(shift+charIndex)]
        }
        else return char
    }

    return str.split('').map(shiftCharacter).join('')
}

console.log(caesarCipher(', Word!', 3))
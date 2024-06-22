import { caesarCipher } from "./caesarCipher"

it('lower-case word', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor')
})

it('upper-case word', () => {
    expect(caesarCipher('HELLO', 3)).toBe('KHOOR')
})

it('mixed-case word', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})

it('xyz', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
})

it('punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})
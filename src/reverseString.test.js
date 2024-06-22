import {reverseString} from './reverseString'

it('One character string', () => {
    expect(reverseString('a')).toBe('a')
})

it('Two character string', () => {
    expect(reverseString('ab')).toBe('ba')
})

it('Long string', () => {
    expect(reverseString('HelloWorld')).toBe('dlroWolleH')
})
import {calculator} from './calculator.js'


it('2 + 2', () => {
    expect(calculator.add(2,2)).toBe(4)
})

it('1+1', () => {
    expect(calculator.add(1,1)).toBe(2)
})

it('3-2', () => {
    expect(calculator.substract(3,2)).toBe(1)
})

it('2-3', () => {
    expect(calculator.substract(2,3)).toBe(-1)
})

it('3x3', () => {
    expect(calculator.multiply(3,3)).toBe(9)
})

it('6x4', () => {
    expect(calculator.multiply(6,4)).toBe(24)
})

it('3/3', () => {
    expect(calculator.divide(3,3)).toBe(1)
})

it('55/5', () => {
    expect(calculator.divide(55,5)).toBe(11)
})

it('3/0', () => {
    expect(calculator.divide(3,0)).toBe('error')
})
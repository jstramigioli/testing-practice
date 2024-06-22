import {capitalize} from './capitalize.js'

// Capitalize test

it('string with first character capitalized case 1', ()=> {
    expect(capitalize('Test')).toBe('T')
})

it('string with first character capitalized case 2', () => {
    expect(capitalize('Another')).toBe('A')
})

it('string with first character on lowercase case 1', () => {
    expect(capitalize('test')).toBe('T')
})


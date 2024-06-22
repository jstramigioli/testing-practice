import { analyzeArray } from "./analyzeArray"

it('returns length', () => {
    expect((analyzeArray([1,8,3,4,2,6])).length == 6).toBeTruthy()
})

it('returns min', () => {
    expect((analyzeArray([1,8,3,4,2,6])).min === 1).toBeTruthy()
})

it('returns max', () => {
    expect((analyzeArray([1,8,3,4,2,6])).max === 8).toBeTruthy()
})

it('returns average', () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4)
})
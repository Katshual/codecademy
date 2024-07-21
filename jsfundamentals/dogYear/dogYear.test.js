import { expect, test } from 'vitest'
import {  myAge, earlyYears, laterYears, myAgeInDogYears, sum, myName } from './dogYear'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
})

test('calculate early years', () => {
    expect(earlyYears).toBe(21)
})

test('calculate the later years', () => {
    const expectedLatedYears=(myAge-2)*4;
    expect(laterYears).toBe(expectedLatedYears)
})

test('calculate my age in dog years', () => {
    const expectedAgeInDogYear=earlyYears+laterYears;
    expect(myAgeInDogYears).toBe(expectedAgeInDogYear)
})

test('convert name in lower case', () => {
    expect(myName).toBe('patrick')
})


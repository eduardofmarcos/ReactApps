import pagination from './index'

import { expect } from 'chai'

test('TEST - 1: pagination should be a funcion', () => {
  expect(pagination).to.be.a('function')
})

test('TEST - 2: pagination({total:1, activePage:1}) should return [1]', () => {
  const params = { total: 1, activePage: 1 }
  const result = [1]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 3: pagination({total:2, activePage:1}) should return [1,2]', () => {
  const params = { total: 2, activePage: 1 }
  const result = [1, 2]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 4: pagination({total:5, activePage:1}) should return [1,2,3,4,5]', () => {
  const params = { total: 5, activePage: 1 }
  const result = [1, 2, 3, 4, 5]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 5: pagination({total:6, activePage:1}) should return [1,2,3,...,6]', () => {
  const params = { total: 6, activePage: 1 }
  const result = [1, 2, 3, '...', 6]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 6: pagination({total:6, activePage:2}) should return [1,2,3,...,6]', () => {
  const params = { total: 6, activePage: 2 }
  const result = [1, 2, 3, '...', 6]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 7: pagination({total:6, activePage:3}) should return [1,2,3,4,5,6]', () => {
  const params = { total: 6, activePage: 3 }
  const result = [1, 2, 3, 4, 5, 6]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 8: pagination({total:6, activePage:4}) should return [1,2,3,4,5,6]', () => {
  const params = { total: 6, activePage: 4 }
  const result = [1, 2, 3, 4, 5, 6]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 9: pagination({total:6, activePage:5}) should return [1,...,4,5,6]', () => {
  const params = { total: 6, activePage: 5 }
  const result = [1, '...', 4, 5, 6]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 10: pagination({total:6, activePage:6}) should return [1,...,4,5,6]', () => {
  const params = { total: 6, activePage: 6 }
  const result = [1, '...', 4, 5, 6]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 11: pagination({total:7, activePage:1}) should return [1,2,3,...,7]', () => {
  const params = { total: 7, activePage: 1 }
  const result = [1, 2, 3, '...', 7]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 12: pagination({total:7, activePage:1}) should return [1,2,3,...,7]', () => {
  const params = { total: 7, activePage: 1 }
  const result = [1, 2, 3, '...', 7]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 13: pagination({total:7, activePage:3}) should return [1,2,3,4,...,7]', () => {
  const params = { total: 7, activePage: 3 }
  const result = [1, 2, 3, 4, '...', 7]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 14: pagination({total:7, activePage:4}) should return [1,2,3,4,5,6,7]', () => {
  const params = { total: 7, activePage: 4 }
  const result = [1, 2, 3, 4, 5, 6, 7]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 15: pagination({total:7, activePage:5}) should return [1,...,4,5,6,7]', () => {
  const params = { total: 7, activePage: 5 }
  const result = [1, '...', 4, 5, 6, 7]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 16: pagination({total:7, activePage:6}) should return [1,...,5,6,7]', () => {
  const params = { total: 7, activePage: 6 }
  const result = [1, '...', 5, 6, 7]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 17: pagination({total:7, activePage:7}) should return [1,...,5,6,7]', () => {
  const params = { total: 7, activePage: 7 }
  const result = [1, '...', 5, 6, 7]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 18: pagination({total:15, activePage:8}) should return [1,...,7,8,9,...,15]', () => {
  const params = { total: 15, activePage: 8 }
  const result = [1, '...', 7, 8, 9, '...', 15]
  expect(pagination(params)).to.be.deep.equal(result)
})

// Treating exceptions

test('TEST - 19: - NOT PASSING ACTIVE PAGE (ASSUMING = 1) - pagination({total:15}) should return [1,2,3,...,15]', () => {
  const params = { total: 15 }
  const result = [1, 2, 3, '...', 15]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 20: - NOT PASSING ANY PARAMETERS (ASSUMING = 1) - pagination({}) should return [1]', () => {
  const params = {}
  const result = [1]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 21: - NOT PASSING ACTIVE PAGE (ASSUMING = 1) - pagination({total:15}) should return [1,2,3,...,15]', () => {
  const params = { total: 15 }
  const result = [1, 2, 3, '...', 15]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('TEST - 22: - ONLY EXECUTING THE FUNCTION - pagination() should return [1]', () => {
  const params = {}
  const result = [1]
  expect(pagination()).to.be.deep.equal(result)
})

test('TEST - 23: - PASSING WRONG DATA VALUES (total) - pagination({total:"abcd", activePage:1}) should throw an error', () => {
  const params = { total: 'abcd', activePage: 1 }
  const result = 'Total should be a number'
  try {
    pagination(params)
  } catch (error) {
    expect(error.message).to.be.equal(result)
  }
})

test('TEST - 24: - PASSING WRONG DATA VALUES (activePage)- pagination({total:10, activePage:"abdc"}) should throw an error', () => {
  const params = { total: 10, activePage: 'abcd' }
  const result = 'ActivePage should be a number'
  try {
    pagination(params)
  } catch (error) {
    expect(error.message).to.be.equal(result)
  }
})

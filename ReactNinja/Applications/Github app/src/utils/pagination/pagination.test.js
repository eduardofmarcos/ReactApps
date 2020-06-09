import pagination from './index'

import { expect } from 'chai'

test('pagination should be a funcion', () => {
  expect(pagination).to.be.a('function')
})

test('pagination({total:1, activePage:1}) should return [1]', () => {
  const params = { total: 1, activePage: 1 }
  const result = [1]
  expect(pagination(params)).to.be.deep.equal(result)
})

test('pagination({total:2, activePage:1}) should return [1,2]', () => {
  const params = { total: 2, activePage: 1 }
  const result = [1, 2]
  expect(pagination(params)).to.be.deep.equal(result)
})

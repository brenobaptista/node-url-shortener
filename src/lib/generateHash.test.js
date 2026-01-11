import { describe, it } from 'node:test'
import assert from 'node:assert'
import generateHash from './generateHash.js'

describe('generateHash', () => {
  it('returns a 7-character string', () => {
    const hash = generateHash()
    assert.strictEqual(hash.length, 7)
  })

  it('only contains alphanumeric characters', () => {
    const hash = generateHash()
    assert.match(hash, /^[A-Za-z0-9]+$/)
  })

  it('generates different hashes on subsequent calls', () => {
    const hashes = new Set()
    for (let i = 0; i < 100; i++) {
      hashes.add(generateHash())
    }
    assert.strictEqual(hashes.size, 100)
  })
})

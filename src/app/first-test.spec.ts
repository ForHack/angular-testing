describe('First test', () => {
  let testVal: any

  beforeEach(() => {
    testVal = {}
  })

  it('should return true if a is true', () => {
    testVal.a = false

    testVal.a = true

    expect(testVal.a).toBe(true)
  })
})

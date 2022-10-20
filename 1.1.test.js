describe('verifica objeto', ()=>{
  it('verifica semelhança',()=>{
    expect({ name: 'john doe' }).toEqual({ name: 'john doe' }) // toEqual ===
  })
  it('verifica semelhança com o not',()=>{
    expect({ name: 'john doe' }).not.toBe({ name: 'john doe' })  //toBe ==
  })
  
})

  
  


it('verifica se contem no objeto', ()=>{
    const name = { name1 : 'Adil', age : 23 }
    expect(name).toHaveProperty('age', 23);
})
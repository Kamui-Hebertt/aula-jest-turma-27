const fruta1 = {
    nome: 'abacaxi',
    quantidade: 12,
  };
  const fruta2 = {
    nome: 'abacaxi',
    quantidade: 12,
  };

  describe('testando objeto',()=>{
      it('',()=>{
          expect( typeof fruta1).toBe('object')
      })
      it('verifica a igualdade', ()=>{
          expect(fruta1).toEqual(fruta2)
      })
      it('verifica a igualdade', ()=>{
        expect(fruta1.nome).toBe('abacaxi') // ==
    })
    it('verifica a com toMatch', ()=>{
        expect(fruta1.nome).toMatch('abaca') // ==
    })
  })

  function clearArray(arraypara) {
    while (arraypara.length > 0) {
      arraypara.pop();
    }

  }

  const array = [1, undefined, 3, null, 5];

  test('verifica array', ()=>{
      clearArray(array);
      expect(array.length).toEqual(0);
      expect(array[0]).toBeUndefined();
      expect(array[4]).toEqual(undefined);
  })
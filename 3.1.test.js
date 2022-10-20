describe('testando números não inteiros', () =>{
    test('Testando a adição de números não inteiros', () => {
      const num = 0.1;
      const num1 = 0.2;
        expect(num + num1).toBeCloseTo(0.3);
      });})
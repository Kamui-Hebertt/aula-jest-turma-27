const xablau2 =() =>{
    return true
    
   }

  const  xablau = () =>{
    return null;
  }

  describe('verificando valor da função', ()=> {

    test('Testando se ao chamar a função a mesma retorna Null', () => {
      expect(xablau()).toBeNull();
    });
     
      
    test('verificando se é true ou false', () => {
    
  
     
      expect(xablau2()).not.toBe(false);// == toBe(false) // toBeFalsy ===
    });
        
    
  
        test('Verifica se retorna valor true',()=>{
            expect(xablau2()).toBeTruthy()
       })
      
        test('verifica o tipo do valor do retorno da função', ()=>{
            expect(typeof xablau2()).toBe('boolean');
        })
  })

   
const generateData = require ('./objFunc');

describe('testando função objeto', ()=>{
    it('',()=>{
        const person = generateData('Carlos');
        expect(typeof person).toBe('object');
        expect(typeof person.class).toBe('function');
        expect(person.class()).toEqual('Aluno da turma 27!');
    })

})
var expect = require('chai').expect;

describe.only('Arrays test', () => {
    const array = [1, 2, 4, 6, 8];
    // Una prueba
    it ('Los valores del array son iguales', () => {
        const resultado = [1, 2, 4, 6, 8];
        expect(String(array)).to.equal('1,2,4,6,8');
        expect(array).to.eql(resultado);
        expect(array).to.deep.equal(resultado);
        //el arreglo contiene los mismo numeros en el mismo orden
        expect([1,2,3]).to.have.ordered.members([1,2,3]);
        
    });

    it('Contiene el valor "2" el array', () => {
        //pasar el arreglo a string luego buscar si es mayor a
        //-1 es que encontro algo
        expect(String(array).indexOf('2,')>-1).to.equal(true);
        expect(array).to.include(2);
        expect(array).to.be.an('array').that.includes(2);
        expect([1,2]).to.include(2).not.to.include(56);

    });
    it('Incluye todos los números o alguno de ellos', () => {
        // Incluye esos números con duplicados (no tienen que estar todos)
        expect(array).to.include.members([1,2,1,4,8]);
        /* malo
        expect(array).to.include.members([1,2,1,4,777]);
        */
    });
    it('Contiene los valores independientemente del orden', () => {
        
    });
    it('Tiene una longitud de 5 carácteres', () => {
        
    });
});

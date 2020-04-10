
describe('Hooks', () => {
    before(() => console.log('before= se ejecuta solo al inicio'));
    after(() => console.log('after= se ejecuta al final de todas las pruebas'));
    beforeEach(() => console.log('beforeEach= se ejecuta por cada it o prueba'));
    afterEach(() => console.log('atferEach= se ejecuta despues de todos los it o pruebas'));
    it('Prueba 1', ()=> console.log('Test 1'));
    it('Prueba 2', ()=> console.log('Test 2'));

});
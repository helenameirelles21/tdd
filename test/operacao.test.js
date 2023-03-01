const { describe, expect, it } = require('@jest/globals')
const calculadora = require('../src/operacoes')

describe('teste da calculadora', () => {

    it('operação de soma', () => {
        let resultado = calculadora.sum(1, 2);
        expect(resultado).toEqual(3);

        resultado = calculadora.sum(-1, 2);
        expect(resultado).toEqual(1);

        resultado = calculadora.sum(0, 2);
        expect(resultado).toEqual(2);

        resultado = () => calculadora.sum("a", 2);
        expect(resultado).toThrow('nao e um numero');

        resultado = () => calculadora.sum(2, "a");
        expect(resultado).toThrow('nao e um numero');


    })

    it('operação de subtração', () => {
        let resultado = calculadora.sub(1, 2);
        expect(resultado).toEqual(-1);

        resultado = calculadora.sub(2, 3);
        expect(resultado).toEqual(-1);

        resultado = calculadora.sub(0, 2);
        expect(resultado).toEqual(-2);

        resultado = () => calculadora.sub("a", 2);
        expect(resultado).toThrow('nao e um numero');

        resultado = () => calculadora.sub(2, "a");
        expect(resultado).toThrow('nao e um numero');

    })

    it('operação de divisão', () => {
        let resultado = calculadora.div(0, 2);
        expect(resultado).toEqual(0);

        resultado = calculadora.div(6, 1.5);
        expect(resultado).toEqual(4);

        resultado = calculadora.div(7, -3 );
        expect(resultado).toEqual(-2.3333333333333333);

        resultado = calculadora.div(15, 15);
        expect(resultado).toEqual(1);

        resultado = calculadora.div(-10, -10);
        expect(resultado).toEqual(1);

        resultado = calculadora.div(0.5, 0.5);
        expect(resultado).toEqual(1);

        resultado = calculadora.div(-100, 100);
        expect(resultado).toEqual(-1);

        resultado = () => calculadora.div("a", 2);
        expect(resultado).toThrow('nao e um numero');

        resultado = () => calculadora.div(2, "a");
        expect(resultado).toThrow('nao e um numero');


    })

    it('operação de multiplicação', () => {
        let resultado = calculadora.mult(0, 2);
        expect(resultado).toEqual(0);

        resultado = calculadora.mult(6, 1.5);
        expect(resultado).toEqual(9);

        resultado = calculadora.mult(7, -3 );
        expect(resultado).toEqual(-21);

        resultado = calculadora.mult(15, 15);
        expect(resultado).toEqual(225);

        resultado = calculadora.mult(-10, -10);
        expect(resultado).toEqual(100);

        resultado = calculadora.mult(0.5, 0.5);
        expect(resultado).toEqual(0.25);

        resultado = () => calculadora.mult("a", 2);
        expect(resultado).toThrow('nao e um numero');

        resultado = () => calculadora.mult(2, "a");
        expect(resultado).toThrow('nao e um numero');


    })

    it('operação de potencia', () => {
        let resultado = calculadora.pot(8, 2);
        expect(resultado).toEqual(64);

        resultado = calculadora.pot(6, 3);
        expect(resultado).toEqual(216);

        resultado = calculadora.pot(7, 0 );
        expect(resultado).toEqual(1);

        resultado = calculadora.pot(15, 15);
        expect(resultado).toEqual(437893890380859400);

        resultado = calculadora.pot(-10, -10);
        expect(resultado).toEqual( 1e-10);

        resultado = calculadora.pot(0.5, 3);
        expect(resultado).toEqual(0.125);

        resultado = calculadora.pot(10, 2);
        expect(resultado).toEqual(100);

        resultado = () => calculadora.pot("a", 2);
        expect(resultado).toThrow('nao e um numero');

        resultado = () => calculadora.pot(2, "a");
        expect(resultado).toThrow('nao e um numero');


    })

    it('operação de raiz', () => {
        let resultado = calculadora.raiz(1);
        expect(resultado).toEqual(1);

        resultado = calculadora.raiz(9);
        expect(resultado).toEqual(3);

        resultado = calculadora.raiz(36);
        expect(resultado).toEqual(6);

        resultado = calculadora.raiz(0);
        expect(resultado).toEqual(0);

        resultado = calculadora.raiz(49);
        expect(resultado).toEqual(7);

        resultado = calculadora.raiz(100);
        expect(resultado).toEqual(10);

        resultado = calculadora.raiz(16);
        expect(resultado).toEqual(4);

        resultado = () => calculadora.raiz("a", 2);
        expect(resultado).toThrow('nao e um numero');

        resultado = () => calculadora.raiz(2, "a");
        expect(resultado).toThrow('nao e um numero');


    })
})
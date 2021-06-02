const chai = require('chai');
const expect = chai.expect;
var assert = chai.assert;
var should = chai.should();
var calculator = require('../calculator');


describe('Calculator', () => {
    describe('Is number or not', () => {
        it('should return true if it\'s a number', () => {
            expect(calculator.isNumber(2, 20)).to.equal(true)
        })
    })
    describe('Addition', () => {
        it('should sum two numbers', () => {
            expect(calculator.add(2, 20)).to.equal(22)
            expect(calculator.add(50, 39)).to.equal(89)
        })
    })
    describe('Subtraction', () => {
        it('should subtract two numbers', () => {
            expect(calculator.subtract(6, 2)).to.equal(4)
            expect(calculator.subtract(50, 39)).to.equal(11)
        })
    })
    describe('Multiplication', () => {
        it('should multiply two numbers', () => {
            expect(calculator.multiply(3, 2)).to.equal(6)
            expect(calculator.multiply(-31, 32)).to.equal(-992)
            expect(calculator.multiply(-5, -2)).to.equal(10)
        })
    })

    describe('Division', () => {
        it('should divide two numbers', () => {
            expect(calculator.divide(4, 2)).to.equal(2)
            expect(calculator.divide(50, 5)).to.equal(10)
        })
        it('should return NaN if the denominator is zero', () => {
            expect(calculator.divide(4, 0)).to.equal(undefined)
            expect(calculator.divide(-15, 0)).to.equal(undefined)
        })
    })
})

// describe('Validating All the test cases', () => {
//     it('should return true if it\'s a number', () => {
//         expect(valid.isNumber(10, 20)).to.equal(true);
//     })
//     it('should return true if both the numbers are not negative', () => {
//         expect(valid.isNumber(30, -40)).to.equal(true);
//     })
//     // it('should return false if it\'s not a number', () => {
//     //     expect(valid.isNumbValid(10, 'suresh')).to.equal(true);
//     // })
//     // it('should return true for a number between 20 and 60', () => {
//     //     expect(valid.isNumbValid(40, 100)).to.equal(true)
//     // })
//     // it('Test all the calculator functions', () => {
//     //     expect(valid.isNumbValid(40, '20')).to.equal(true)
//     // })
// });
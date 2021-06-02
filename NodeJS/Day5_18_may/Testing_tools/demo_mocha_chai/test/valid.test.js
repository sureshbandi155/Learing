const chai = require('chai');
const expert = chai.expect;
var assert = chai.assert;
var should = chai.should();
const validator = require('../valid');

//describe something like a test suit
//it => it contain test case

describe('Validating isNumValid()', () => {
    //mocha hooks
    before(() => console.log('I\'m from [before..] hook')); //executes before all the test cases
    after(() => console.log('I\'m from [after..] hook'));//executes after all the test cases
    beforeEach(() => console.log('I\'m from [beforeEach..] hook')); //executes beforeEach in each test case
    afterEach(() => console.log('I\'m from [afterEach..] hook'));//executes afterEach in each test case
    it('should return true for a number between 10 and 70', () => {
        expert(validator.isNumValid(40)).to.equal(true)
    })
    // it('should return false for a number > then 70', () => {
    //     expert(validator.isNumValid(90)).to.equal(false)
    // })
    it('should return false for a number > then 70', () => {
        expert(validator.isNumValid(90)).to.be.false
    })
    it('should return false for a number < then 10', () => {
        expert(validator.isNumValid(9)).to.be.true
    })

    let numbers = [1, 2, 3, 4, 5];
    it('checking for an array', () => {
        expert(numbers).to.include(2); //semi colon is required for expert
        expert(numbers).to.be.an('array').that.includes(1);
        (numbers).should.be.an('array').that.includes(2);
        assert.isArray(numbers, 'numbers is not a array');
    })
})

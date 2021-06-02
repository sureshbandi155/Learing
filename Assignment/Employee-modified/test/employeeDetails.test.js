const chai = require('chai');
const expect = chai.expect;
var assert = chai.assert;
var should = chai.should();
var employee = require('../employeeDetails');

describe('Employee Details:', () => {
    describe('Name Test suits', () => {
        it('Name should contain minimum of 3 and maximu of 30 characters', () => {
            expect(employee.name('suri')).to.equal(true);
        })
        it('Name should contain maximum of 30 charters', () => {
            expect(employee.name('sutheheheheheheheheheheheh')).to.equal(true);
        })

        // it('Name should contain minimum of 3 characters', () => {
        //     expect(employee.name('suri')).to.lengthOf.above(3);
        // })
        // it('Name should contain maximum of 30 charters', () => {
        //     expect(employee.name('suresh')).to.lengthOf.below(30);
        // })

    })
    describe('experience Test suits', () => {
        it('Years of experience should not be negative', () => {
            expect(employee.exp(1)).to.equal(true);
        })
        it('Years of experience should be less then 3', () => {
            expect(employee.exp(2)).to.equal(true);
        })
    })
    describe('Email Test suits', () => {
        it('Email should have a char @', () => {
            expect(employee.email('suresh@gmail.com')).to.equal(true);
        })
        it('Email should have a char .', () => {
            expect(employee.email('suresh@gmail.com')).to.equal(true);
        })
    })
    describe('Address Test suits', () => {
        it('Address Should be "brillio" ', () => {
            expect(employee.address('brillio')).to.equal(true);
        })
        it('Address Should be "brillio" ', () => {
            expect(employee.address(undefined)).to.equal(true);
        })

    })
    describe('Previous project Test suits', () => {
        it('employee can have zero or more data for names of the previous projects', () => {
            expect(employee.projects([])).to.have.lengthOf(0);
        })
        it('employee can have zero or more data for names of the previous projects', () => {
            expect(employee.projects(['SportsApp - Reactjs'])).to.have.lengthOf(1);
        })

    })
})
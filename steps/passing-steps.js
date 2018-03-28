const {Given, Then, When} = require('cucumber')
const {expect}= require('chai')

Given('I visit {string}', (url) => expect(url).to.be.equal(url))

When('I click the clickable region', () => expect(true).to.be.equal(true))

Then('I should get the result: {int}', (num) => {
    expect(num).to.be.equal(num)
})

Then('I run failing step', () => {
    expect(true).to.be.equal(false)
})

Then('I see steps after as pending', () => {
    expect(true).to.be.equal(true)
})

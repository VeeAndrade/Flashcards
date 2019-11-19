const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', () => {

  let card;
  let turn;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should have a guess', () => {
    expect(turn.guess).to.equal('pug');
  });

  it('should have a the card that the guess came from', () => {
    expect(turn.card).to.equal(card);
  });

  it('should return the guess', () => {
    expect(turn.returnGuess()).to.equal('pug')
  });

  it('should return the card', () => {
    expect(turn.returnCard()).to.equal(card)
  });

  it('should return a boolean depending on the guess provided', () => {
    expect(turn.evaluateGuess()).to.equal(false)
  });

  it('should evaluate the answer depending on the guess matching the correct answer', () => {
    expect(turn.giveFeedback()).to.equal('incorrect!')
  });

  it('should give feedback if answer is correct', () => {
    const turn2 = new Turn('sea otter', card)
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
})
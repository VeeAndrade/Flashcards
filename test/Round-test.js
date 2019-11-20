const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card')

describe('Round', () => {

  let card1, card2, card3, deck, round;
  
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round)
  });

  it('should have a deck', () => {
    expect(round.deck).to.eql([card1, card2, card3])
  });

  it('should return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(card1)
  });

  it('should have a count of how many turns have gone by', () => {
    expect(round.turns).to.equal(0)
  });

  it('should keep track of the incorrect guesses', () => {
    expect(round.incorrectGuesses).to.eql([])
  });

  it('should update turns count and evaluates guesses', () => {

    expect(round.takeTurn('sea otter')).to.equal('correct!')
    expect(round.turns).to.equal(1);
    expect(round.incorrectGuesses).to.deep.equal([])
    expect(round.takeTurn('spleen')).to.equal('incorrect!')
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([14])
    expect(round.returnCurrentCard()).to.equal(card3)
  });

  it('should calculate the percentage right', () => {

    round.takeTurn('sea otter')
    round.takeTurn('spleen')
    round.takeTurn('playing with bubble wrap')
    expect(round.calculatePercentCorrect()).to.equal(66)
  });

  it('should print a message indicating the round is over', () => {
    round.takeTurn('sea otter')
    round.takeTurn('spleen')
    round.takeTurn('playing with bubble wrap')
    expect(round.endRound()).to.equal('** Round over! ** You answered 66% of the questions correctly!')
  });
})
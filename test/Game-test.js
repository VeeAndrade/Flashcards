const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round')
const Game = require('../src/Game')

describe('Game', () => {

  it('should have a keep track of the current round', () => {
    const game = new Game()
    expect(game.currentRound).to.equal(null)
  });

  it('should start the game by creating cards', () => {
    const game = new Game()
    expect(game.currentRound).to.equal(null)
    game.start();
    expect(game.currentRound).to.be.an.instanceOf(Round)
  })
})
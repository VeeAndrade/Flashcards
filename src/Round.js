const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.turns = 0
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    let currentCard = this.returnCurrentCard()
    let turn = new Turn(guess, currentCard)
    this.turns += 1
    this.deck.shift();
    if(!turn.evaluateGuess(guess)){
      this.incorrectGuesses.push(currentCard.id)
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return parseInt(((this.turns - this.incorrectGuesses.length)/this.turns) * 100)
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    process.exit()
    return;
  }
}

module.exports = Round;
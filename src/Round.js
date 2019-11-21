const Turn = require('../src/Turn')

let startTime, endTime;
class Round {
  constructor(deck) {
    this.deck = deck.cards
    this.turns = 0
    this.incorrectGuesses = [];
    this.time = Date.now();
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

  startTimer() {
    startTime = Date.now();
    return startTime
  }

  endRound() {
    const totalMinutes = Math.floor(((Date.now() - this.time) / 1000) / 60)
    const totalSeconds = parseInt(((Date.now() - this.time) / 1000) % 60)
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    console.log(`Round time: ${totalMinutes} minutes and ${totalSeconds} seconds!`)
    process.exit()
    return;
  }
}

module.exports = Round;
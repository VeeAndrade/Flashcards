const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck.js');
const Card = require('../src/Card');
const Round = require('../src/Round');
class Game {
  constructor() {
    this.currentRound = null;
  }

  start() {
    let deckOfCards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    let deck = new Deck(deckOfCards)
    let round = new Round(deck)
    this.currentRound = round
    this.printMessage(deck, round)
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
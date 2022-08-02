class Card {

  static suits = { D: 'Diamonds', H: 'Hearts', C: 'Clubs', S: 'Spades' }
  static faces = { A: 'Ace', J: 'Jack', Q: 'Queen', K: 'King' }
  static vals = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  #val
  #suit

  constructor (val, suit) {
    this.#val = val
    this.#suit = suit
    this.faceUp = false
  }

  get colour () { return this.#ifShown('DH'.includes(this.#suit) ? 'red' : 'black') }

  get rank () { return this.#ifShown(Card.vals.indexOf(this.#val) + 1) }

  get val () { return this.#ifShown(this.#val) }

  get suit () { return this.#ifShown(this.#suit) }

  get index () { return this.#ifShown(this.#val + this.#suit) }

  get title () {
    const txt = `${Card.faces[this.#val] || this.#val} of ${Card.suits[this.#suit]}`
    return this.#ifShown(txt)
  }

  #ifShown (x) { return this.faceUp ? x : '?' }

  flip () { this.faceUp = !this.faceUp }

  show () { this.faceUp = true }

  hide () { this.faceUp = false }

}

class Deck {

  constructor () {
    this.cards = []
    for (let suit of Object.keys(Card.suits)) {
      for (let val of Card.vals) {
        this.cards.push(new Card(val, suit))
      }
    }
  }

  deal () { return this.cards.shift() }

  randomIndex () { return Math.floor(Math.random() * this.cards.length) }

  random () { return this.cards.splice(this.randomIndex(), 1)[0] }

  shuffle () {
    const newDeck = []
    while (this.cards.length) {
      newDeck.unshift(this.random())
    }
    this.cards = newDeck
  }

  flip () {
    this.cards.forEach(c => c.flip())
    this.cards = this.cards.reverse()
  }

  split (n) {
    const top = this.cards.slice(0, n)
    const bottom = this.cards.slice(n)
    this.cards = [...bottom, ...top]
  }

}

const deck = new Deck()
console.log(deck.cards.map(c => c.index))
deck.flip()
console.log(deck.cards.map(c => c.index))
deck.split(26)
console.log(deck.cards.map(c => c.index))
deck.shuffle()
console.log(deck.cards.map(c => c.index))
console.log(deck.deal().title)
console.log(deck.random().title)
console.log(deck.cards.length)

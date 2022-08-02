class Die {

  constructor (sides) {
    this.sides = sides
  }

  roll () {
    return 1 + Math.floor(Math.random() * this.sides)
  }

}

class Cup {

  constructor (diceNums) {
    this.dice = diceNums.map(n => new Die(n))
  }

  spill () {
    return this.dice.map(d => d.roll())
  }

}

const die = new Die (6)
console.log(die.sides)
console.log(die.roll(), die.roll(), die.roll())

console.log('')

const cup = new Cup([4, 6, 10])
console.log(cup.dice)
console.log(cup.spill(), cup.spill(), cup.spill())
